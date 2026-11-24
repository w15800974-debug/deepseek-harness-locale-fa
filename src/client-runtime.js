/**
 * Browser runtime template for deepseek-harness-locale-fa.
 *
 * scripts/build.mjs compiles this file together with dict/fa/core.json,
 * dict/fa/ui-phrases.json, and src/rtl.css into a single top-level
 * window.__ModuleLoader__.load({ id: 'deepseek-harness-locale-fa', factory })
 * bundle at lib/client.js.
 */

/* global __CORE_DICTS__, __UI_PHRASES__, __RTL_CSS__ */

const LOCALE_ID = 'fa'
const LOCALE_LABEL = 'فارسی'
const STYLE_ELEMENT_ID = 'dsh-locale-fa-rtl-style'
const FONT_LINK_ID = 'dsh-locale-fa-vazirmatn-font'
const HTML_RTL_CLASS = 'dsh-locale-fa-rtl'

const PERSIAN_ARABIC_RE = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/
const LATIN_RE = /[A-Za-z]/
const TECHNICAL_TEXT_RE =
  /^(?:https?:\/\/|\/[\w./-]+|[A-Za-z]:\\|git\s|npm\s|pnpm\s|yarn\s|npx\s|node\s|python3?\s|pip\s|docker\s|dsh\s|cd\s|ls\s|cat\s|grep\s|curl\s|sudo\s|\$\s|--?[a-z0-9-]+|\{[^{}]*\}|\[[^[\]]*\])$/i

const STRICT_LTR_SELECTOR = [
  'pre',
  'code',
  'samp',
  'var',
  'kbd',
  'script',
  'style',
  'noscript',
  'svg',
  '.hljs',
  '.shiki',
  '.prism-code',
  '.cm-editor',
  '.monaco-editor',
  '.xterm',
  '[data-language]',
  '[data-terminal]',
  '[data-dsh-ltr="true"]',
  '[class*="codeBlock"]',
  '[class*="code-block"]',
  '[class*="CodeBlock"]',
  '[class*="terminal"]',
  '[class*="Terminal"]',
  '[class*="commandOutput"]',
  '[class*="command-output"]',
  '[class*="CommandOutput"]',
  '[class*="shellOutput"]',
  '[class*="shell-output"]',
  '[class*="bashCommand"]',
  '[class*="bash-command"]',
  '[class*="stdout"]',
  '[class*="stderr"]',
  '[class*="diffViewer"]',
  '[class*="diff-viewer"]',
  '[class*="DiffViewer"]',
  '[class*="toolArgs"]',
  '[class*="tool-args"]',
  '[class*="toolInput"]',
  '[class*="tool-input"]',
  '[class*="filePath"]',
  '[class*="file-path"]',
  '[class*="FilePath"]',
  '[class*="stackTrace"]',
  '[class*="stack-trace"]',
].join(',')

const CHAT_CONTENT_SELECTOR = [
  '[class*="markdown"]',
  '[class*="Markdown"]',
  '[class*="prose"]',
  '[class*="Prose"]',
  '[class*="messageContent"]',
  '[class*="message-content"]',
  '[class*="MessageContent"]',
  '[class*="messageBody"]',
  '[class*="message-body"]',
  '[class*="chatMessage"]',
  '[class*="chat-message"]',
  '[data-message-id]',
  '[data-testid*="message"]',
].join(',')

const BIDI_BLOCK_SELECTOR = 'p, li, h1, h2, h3, h4, h5, h6, blockquote, td, th, figcaption, summary'

const COMPILED_PATTERNS = (__UI_PHRASES__.patterns || []).map((entry) => ({
  regex: new RegExp(entry.pattern),
  replace: entry.replace,
}))

const EXACT_PHRASES = __UI_PHRASES__.exact || {}

function isPersianLocale(locale) {
  if (typeof locale !== 'string') return false
  const normalized = locale.trim().toLowerCase()
  return normalized === LOCALE_ID || normalized.startsWith('fa-') || normalized.startsWith('fa_')
}

function readActiveLocale(ctx) {
  try {
    const loc = ctx && ctx.locale
    if (loc) {
      if (typeof loc.getSnapshot === 'function') {
        const snap = loc.getSnapshot()
        if (snap && typeof snap.locale === 'string') return snap.locale
        if (snap && typeof snap.activeLocale === 'string') return snap.activeLocale
        if (snap && typeof snap.current === 'string') return snap.current
        if (snap && typeof snap.id === 'string') return snap.id
      }
      if (typeof loc.current === 'string') return loc.current
      if (typeof loc.locale === 'string') return loc.locale
    }
  } catch (_) {
    // Fallback to documentElement.lang below
  }
  if (typeof document !== 'undefined' && document.documentElement) {
    return document.documentElement.getAttribute('lang') || ''
  }
  return ''
}

function translateUiText(rawText) {
  if (typeof rawText !== 'string') return null
  const trimmed = rawText.trim()
  if (!trimmed || trimmed.length > 140) return null
  if (PERSIAN_ARABIC_RE.test(trimmed)) return null
  if (TECHNICAL_TEXT_RE.test(trimmed)) return null

  if (Object.prototype.hasOwnProperty.call(EXACT_PHRASES, trimmed)) {
    const translated = EXACT_PHRASES[trimmed]
    if (translated === trimmed) return null
    const leading = rawText.slice(0, rawText.indexOf(trimmed))
    const trailing = rawText.slice(rawText.indexOf(trimmed) + trimmed.length)
    return leading + translated + trailing
  }

  for (let i = 0; i < COMPILED_PATTERNS.length; i += 1) {
    const rule = COMPILED_PATTERNS[i]
    if (rule.regex.test(trimmed)) {
      const translated = trimmed.replace(rule.regex, rule.replace)
      if (translated !== trimmed) {
        const leading = rawText.slice(0, rawText.indexOf(trimmed))
        const trailing = rawText.slice(rawText.indexOf(trimmed) + trimmed.length)
        return leading + translated + trailing
      }
    }
  }

  return null
}

function classifyBlockDirection(text) {
  if (!text) return null
  const trimmed = text.trim()
  if (!trimmed) return null
  if (TECHNICAL_TEXT_RE.test(trimmed)) return 'ltr'
  if (PERSIAN_ARABIC_RE.test(trimmed)) return 'rtl'
  if (LATIN_RE.test(trimmed)) return 'ltr'
  return null
}

function isInsideSelector(node, selector) {
  const el = node && node.nodeType === 1 ? node : node && node.parentElement
  if (!el || typeof el.closest !== 'function') return false
  return Boolean(el.closest(selector))
}

function createPersianDomController() {
  let active = false
  let previousDir = null
  let domObserver = null
  let scheduled = false
  let pendingRoots = new Set()

  const originalTextNodes = new WeakMap()
  const trackedTextNodes = new Set()
  const originalAttrs = new WeakMap()
  const trackedAttrEls = new Set()
  const trackedBidiEls = new Set()

  function ensureStyles() {
    if (typeof document === 'undefined' || !document.head) return
    if (!document.getElementById(STYLE_ELEMENT_ID)) {
      const style = document.createElement('style')
      style.id = STYLE_ELEMENT_ID
      style.textContent = __RTL_CSS__
      document.head.appendChild(style)
    }
    if (!document.getElementById(FONT_LINK_ID)) {
      const link = document.createElement('link')
      link.id = FONT_LINK_ID
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap'
      link.onerror = () => {
        // Offline or blocked CDN: silently fall back to local Persian/system fonts
      }
      document.head.appendChild(link)
    }
  }

  function removeStyles() {
    if (typeof document === 'undefined') return
    const style = document.getElementById(STYLE_ELEMENT_ID)
    if (style && style.parentNode) style.parentNode.removeChild(style)
    const link = document.getElementById(FONT_LINK_ID)
    if (link && link.parentNode) link.parentNode.removeChild(link)
  }

  function translateElementAttributes(el) {
    if (!el || el.nodeType !== 1 || typeof el.getAttribute !== 'function') return
    if (isInsideSelector(el, STRICT_LTR_SELECTOR)) return

    const attrs = ['placeholder', 'aria-label', 'title']
    for (let i = 0; i < attrs.length; i += 1) {
      const attr = attrs[i]
      const val = el.getAttribute(attr)
      if (!val) continue
      const translated = translateUiText(val)
      if (!translated || translated === val) continue

      let saved = originalAttrs.get(el)
      if (!saved) {
        saved = Object.create(null)
        originalAttrs.set(el, saved)
        trackedAttrEls.add(el)
      }
      if (!(attr in saved)) {
        saved[attr] = val
      }
      el.setAttribute(attr, translated)
    }
  }

  function translateTextNode(textNode) {
    if (!textNode || textNode.nodeType !== 3) return
    const parent = textNode.parentElement
    if (!parent) return
    if (isInsideSelector(parent, STRICT_LTR_SELECTOR)) return
    if (isInsideSelector(parent, CHAT_CONTENT_SELECTOR)) return
    if (parent.isContentEditable) return

    const tag = parent.tagName
    if (tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'SCRIPT' || tag === 'STYLE') return

    const current = textNode.nodeValue
    const translated = translateUiText(current)
    if (!translated || translated === current) return

    if (!originalTextNodes.has(textNode)) {
      originalTextNodes.set(textNode, current)
      trackedTextNodes.add(textNode)
    }
    textNode.nodeValue = translated
  }

  function applySmartBidi(root) {
    if (!root || typeof root.querySelectorAll !== 'function') return
    const containers = []
    if (root.nodeType === 1 && typeof root.matches === 'function' && root.matches(CHAT_CONTENT_SELECTOR)) {
      containers.push(root)
    }
    const found = root.querySelectorAll(CHAT_CONTENT_SELECTOR)
    for (let i = 0; i < found.length; i += 1) {
      containers.push(found[i])
    }

    for (let c = 0; c < containers.length; c += 1) {
      const container = containers[c]
      if (isInsideSelector(container, STRICT_LTR_SELECTOR)) continue
      const blocks = container.querySelectorAll(BIDI_BLOCK_SELECTOR)
      for (let b = 0; b < blocks.length; b += 1) {
        const block = blocks[b]
        if (isInsideSelector(block, STRICT_LTR_SELECTOR)) continue
        const dir = classifyBlockDirection(block.textContent || '')
        if (dir) {
          if (block.getAttribute('data-dsh-bidi') !== dir) {
            block.setAttribute('data-dsh-bidi', dir)
            trackedBidiEls.add(block)
          }
        }
      }
    }
  }

  function processSubtree(root) {
    if (!active || !root || typeof document === 'undefined') return

    if (root.nodeType === 3) {
      translateTextNode(root)
      return
    }
    if (root.nodeType !== 1) return

    translateElementAttributes(root)

    if (typeof root.querySelectorAll === 'function') {
      const attrCandidates = root.querySelectorAll('[placeholder],[aria-label],[title]')
      for (let i = 0; i < attrCandidates.length; i += 1) {
        translateElementAttributes(attrCandidates[i])
      }
    }

    if (typeof document.createTreeWalker === 'function') {
      const walker = document.createTreeWalker(root, 4 /* NodeFilter.SHOW_TEXT */)
      let currentNode = walker.nextNode()
      while (currentNode) {
        translateTextNode(currentNode)
        currentNode = walker.nextNode()
      }
    }

    applySmartBidi(root)
  }

  function flushPending() {
    scheduled = false
    if (!active) {
      pendingRoots.clear()
      return
    }
    const roots = Array.from(pendingRoots)
    pendingRoots.clear()
    for (let i = 0; i < roots.length; i += 1) {
      processSubtree(roots[i])
    }
  }

  function scheduleRoot(node) {
    if (!active || !node) return
    pendingRoots.add(node)
    if (!scheduled) {
      scheduled = true
      const defer =
        typeof requestAnimationFrame === 'function'
          ? requestAnimationFrame
          : (fn) => setTimeout(fn, 16)
      defer(flushPending)
    }
  }

  function restoreDomMutations() {
    trackedTextNodes.forEach((node) => {
      const original = originalTextNodes.get(node)
      if (typeof original === 'string') {
        try {
          node.nodeValue = original
        } catch (_) {
          // Detached node
        }
      }
    })
    trackedTextNodes.clear()

    trackedAttrEls.forEach((el) => {
      const saved = originalAttrs.get(el)
      if (saved) {
        const keys = Object.keys(saved)
        for (let i = 0; i < keys.length; i += 1) {
          try {
            el.setAttribute(keys[i], saved[keys[i]])
          } catch (_) {
            // Detached element
          }
        }
      }
    })
    trackedAttrEls.clear()

    trackedBidiEls.forEach((el) => {
      try {
        el.removeAttribute('data-dsh-bidi')
      } catch (_) {
        // Detached element
      }
    })
    trackedBidiEls.clear()
  }

  function activate() {
    if (active || typeof document === 'undefined' || !document.documentElement) return
    active = true

    const html = document.documentElement
    previousDir = html.getAttribute('dir')
    html.setAttribute('dir', 'rtl')
    html.classList.add(HTML_RTL_CLASS)
    html.setAttribute('data-dsh-locale-fa', 'active')

    ensureStyles()

    if (document.body) {
      processSubtree(document.body)
    }

    if (typeof MutationObserver === 'function' && document.body) {
      domObserver = new MutationObserver((mutations) => {
        if (!active) return
        for (let i = 0; i < mutations.length; i += 1) {
          const m = mutations[i]
          if (m.type === 'childList') {
            for (let j = 0; j < m.addedNodes.length; j += 1) {
              scheduleRoot(m.addedNodes[j])
            }
          } else if (m.type === 'characterData' && m.target) {
            scheduleRoot(m.target)
          }
        }
      })
      domObserver.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      })
    }
  }

  function deactivate() {
    if (!active) return
    active = false
    pendingRoots.clear()

    if (domObserver) {
      domObserver.disconnect()
      domObserver = null
    }

    restoreDomMutations()
    removeStyles()

    if (typeof document !== 'undefined' && document.documentElement) {
      const html = document.documentElement
      html.classList.remove(HTML_RTL_CLASS)
      html.removeAttribute('data-dsh-locale-fa')
      if (previousDir === null || previousDir === '') {
        html.setAttribute('dir', 'ltr')
      } else {
        html.setAttribute('dir', previousDir)
      }
    }
  }

  return {
    activate,
    deactivate,
    isActive: () => active,
    sync(locale) {
      if (isPersianLocale(locale)) {
        activate()
      } else {
        deactivate()
      }
    },
  }
}

function apply(ctx) {
  // 1. Register Persian (فارسی) in Settings -> General -> Language
  ctx.effect(
    () =>
      ctx.locale.addLanguage({
        id: LOCALE_ID,
        label: LOCALE_LABEL,
        fallback: 'en',
      }),
    'deepseek-harness-locale-fa: language',
  )

  // 2. Register official Persian dictionaries for all namespaces
  const namespaces = Object.keys(__CORE_DICTS__)
  for (let i = 0; i < namespaces.length; i += 1) {
    const ns = namespaces[i]
    const dict = __CORE_DICTS__[ns]
    ctx.effect(
      () => ctx.locale.register(ns, LOCALE_ID, dict),
      `deepseek-harness-locale-fa: ${ns}`,
    )
  }

  // 3. Manage dynamic RTL layout, smart BiDi messages, LTR code preservation & UI fallback
  const controller = createPersianDomController()

  ctx.effect(() => {
    const syncNow = (maybeLocale) => {
      const next = typeof maybeLocale === 'string' && maybeLocale ? maybeLocale : readActiveLocale(ctx)
      controller.sync(next)
    }

    syncNow()

    const disposers = []

    // Listen to Cordis locale/change event
    if (typeof ctx.on === 'function') {
      const off = ctx.on('locale/change', (payload) => {
        if (typeof payload === 'string') {
          syncNow(payload)
        } else if (payload && typeof payload === 'object') {
          syncNow(payload.locale || payload.next || payload.id || readActiveLocale(ctx))
        } else {
          syncNow()
        }
      })
      if (typeof off === 'function') disposers.push(off)
    }

    // Also subscribe to LocaleFace store if exposed
    if (ctx.locale && typeof ctx.locale.subscribe === 'function') {
      const unsub = ctx.locale.subscribe(() => syncNow())
      if (typeof unsub === 'function') disposers.push(unsub)
    }

    // Belt-and-suspenders: watch <html lang="..."> changes written by dsh-client-locale
    let langObserver = null
    if (typeof MutationObserver === 'function' && typeof document !== 'undefined' && document.documentElement) {
      langObserver = new MutationObserver(() => {
        syncNow(document.documentElement.getAttribute('lang') || readActiveLocale(ctx))
      })
      langObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['lang'],
      })
    }

    return () => {
      if (langObserver) langObserver.disconnect()
      for (let i = 0; i < disposers.length; i += 1) {
        try {
          disposers[i]()
        } catch (_) {
          // Ignore teardown errors
        }
      }
      controller.deactivate()
    }
  }, 'deepseek-harness-locale-fa: rtl-bidi-runtime')
}

module.exports = {
  name: 'locale-fa',
  inject: ['locale'],
  apply,
  __internal: {
    LOCALE_ID,
    LOCALE_LABEL,
    isPersianLocale,
    translateUiText,
    classifyBlockDirection,
  },
}
