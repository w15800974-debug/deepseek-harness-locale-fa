#!/usr/bin/env node
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const bundleCode = fs.readFileSync(path.join(rootDir, 'lib', 'client.js'), 'utf8')

// Minimal DOM mock for testing RTL activation/deactivation & cleanup
function createMockDocument() {
  const attrs = new Map([['lang', 'en'], ['dir', 'ltr']])
  const classes = new Set()
  const headChildren = []

  const html = {
    getAttribute: (k) => (attrs.has(k) ? attrs.get(k) : null),
    setAttribute: (k, v) => attrs.set(k, String(v)),
    removeAttribute: (k) => attrs.delete(k),
    classList: {
      add: (c) => classes.add(c),
      remove: (c) => classes.delete(c),
      contains: (c) => classes.has(c),
    },
  }

  const head = {
    appendChild(el) {
      el.parentNode = head
      headChildren.push(el)
      return el
    },
    removeChild(el) {
      const idx = headChildren.indexOf(el)
      if (idx >= 0) headChildren.splice(idx, 1)
      el.parentNode = null
    },
  }

  return {
    documentElement: html,
    head,
    body: {
      nodeType: 1,
      querySelectorAll: () => [],
      matches: () => false,
      getAttribute: () => null,
    },
    createElement(tag) {
      return { tagName: tag.toUpperCase(), id: '', textContent: '', rel: '', href: '', parentNode: null }
    },
    getElementById(id) {
      return headChildren.find((el) => el.id === id) || null
    },
    _headChildren: headChildren,
  }
}

let registeredBundle = null
const mockDoc = createMockDocument()

const sandbox = {
  window: {
    __ModuleLoader__: {
      load(entry) {
        registeredBundle = entry
      },
    },
  },
  document: mockDoc,
  setTimeout,
  clearTimeout,
  console,
}

vm.runInNewContext(bundleCode, sandbox)

// 1. Verify bundle registration
assert.ok(registeredBundle, 'Bundle must register via window.__ModuleLoader__.load')
assert.equal(registeredBundle.id, 'deepseek-harness-locale-fa')
assert.equal(typeof registeredBundle.factory, 'function')

// 2. Materialize plugin exports
const pluginExports = registeredBundle.factory(() => {
  throw new Error('Unexpected external require() call')
})
assert.equal(pluginExports.name, 'locale-fa')
assert.deepEqual(Array.from(pluginExports.inject), ['locale'])
assert.equal(typeof pluginExports.apply, 'function')

// 3. Test apply(ctx) with mock Cordis context & locale service
let activeLocale = 'en'
const addedLanguages = []
const registeredDicts = new Map()
const listeners = new Map()
const effectCleanups = []

const mockCtx = {
  locale: {
    addLanguage(def) {
      addedLanguages.push(def)
      return () => {
        const idx = addedLanguages.indexOf(def)
        if (idx >= 0) addedLanguages.splice(idx, 1)
      }
    },
    register(ns, lang, dict) {
      registeredDicts.set(`${ns}:${lang}`, dict)
      return () => registeredDicts.delete(`${ns}:${lang}`)
    },
    getSnapshot() {
      return { locale: activeLocale }
    },
  },
  on(event, fn) {
    if (!listeners.has(event)) listeners.set(event, new Set())
    listeners.get(event).add(fn)
    return () => listeners.get(event).delete(fn)
  },
  effect(fn) {
    const cleanup = fn()
    if (typeof cleanup === 'function') effectCleanups.push(cleanup)
  },
}

function emitLocaleChange(next) {
  activeLocale = next
  mockDoc.documentElement.setAttribute('lang', next)
  const set = listeners.get('locale/change')
  if (set) {
    for (const fn of set) fn(next)
  }
}

pluginExports.apply(mockCtx)

// Check language registration
assert.equal(addedLanguages.length, 1)
assert.deepEqual({ ...addedLanguages[0] }, { id: 'fa', label: 'فارسی', fallback: 'en' })
assert.ok(registeredDicts.size >= 35, `Expected >= 35 namespaces, got ${registeredDicts.size}`)
assert.equal(registeredDicts.get('common:fa').cancel, 'لغو')
assert.equal(registeredDicts.get('sidebar:fa').newSession, 'نشست جدید')

// While English is active, RTL must NOT be applied
assert.equal(mockDoc.documentElement.getAttribute('dir'), 'ltr')
assert.equal(mockDoc.documentElement.classList.contains('dsh-locale-fa-rtl'), false)

// Switch to Persian -> RTL activates!
emitLocaleChange('fa')
assert.equal(mockDoc.documentElement.getAttribute('dir'), 'rtl')
assert.equal(mockDoc.documentElement.classList.contains('dsh-locale-fa-rtl'), true)
assert.ok(mockDoc.getElementById('dsh-locale-fa-rtl-style'), 'RTL stylesheet must be injected')

// Switch back to English -> RTL deactivates cleanly!
emitLocaleChange('en')
assert.equal(mockDoc.documentElement.getAttribute('dir'), 'ltr')
assert.equal(mockDoc.documentElement.classList.contains('dsh-locale-fa-rtl'), false)
assert.equal(mockDoc.getElementById('dsh-locale-fa-rtl-style'), null, 'RTL stylesheet must be removed')

// 4. Test smart BiDi direction classifier
const { classifyBlockDirection, translateUiText } = pluginExports.__internal
assert.equal(classifyBlockDirection('سلام، این یک پیام فارسی است.'), 'rtl')
assert.equal(classifyBlockDirection('دستور git status را اجرا کنید'), 'rtl')
assert.equal(classifyBlockDirection('This is a purely English paragraph.'), 'ltr')
assert.equal(classifyBlockDirection('git clone https://github.com/deepseek-ai/deepseek-harness'), 'ltr')
assert.equal(classifyBlockDirection('/usr/local/bin/dsh'), 'ltr')

// 5. Test UI chrome phrase translator
assert.equal(translateUiText('New Session'), 'نشست جدید')
assert.equal(translateUiText('Settings'), 'تنظیمات')
assert.equal(translateUiText('3 files'), '3 فایل')
assert.equal(translateUiText('npm run build'), null)
assert.equal(translateUiText('تنظیمات'), null)

// 6. Test full plugin unload cleanup
emitLocaleChange('fa')
assert.equal(mockDoc.documentElement.getAttribute('dir'), 'rtl')
for (const cleanup of effectCleanups) cleanup()
assert.equal(addedLanguages.length, 0, 'Language must be unregistered on unload')
assert.equal(registeredDicts.size, 0, 'Dictionaries must be unregistered on unload')
assert.equal(mockDoc.documentElement.getAttribute('dir'), 'ltr', 'RTL must be cleaned up on unload')

console.log('ALL TESTS PASSED: language registration, dynamic RTL/LTR switching, BiDi classifier, UI fallback, and unload cleanup verified.')
