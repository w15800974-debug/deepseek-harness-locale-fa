/**
 * Browser runtime template for deepseek-harness-locale-fa v2.0.
 *
 * Three-layer architecture:
 * 1. Official DSH Locale API (`ctx.locale.addLanguage` + `ctx.locale.register`)
 *    with real dotted namespace keys.
 * 2. Reversible runtime `ctx.locale.bind` / `resolveText` bridge so any UI string
 *    falling back to English through `t()` is translated to Persian BEFORE React renders.
 * 3. Surgical RTL + Smart BiDi DOM engine that keeps code, commands, terminals,
 *    diffs, file paths, and purely English blocks strictly LTR without breaking layout.
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
  /^(?:https?:\/\/|\/[\w./-]+|[A-Za-z]:\\|git\s|npm\s|pnpm\s|yarn\s|npx\s|node\s|python3?\s|pip\s|docker\s|dsh\s|cd\s|ls\s|cat\s|grep\s|curl\s|sudo\s|\$\s|>\s|--?[a-z0-9-]+|@@\s|\{[^{}]*\}|\[[^[\]]*\]|Error:|TypeError:|SyntaxError:|ReferenceError:|at\s+\S+\s*\()/i

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
  '.katex',
  '.MathJax',
  '[data-language]',
  '[data-terminal="true"]',
  '[data-window-drag-controls]',
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
  '[data-message-id]',
].join(',')

const BIDI_BLOCK_SELECTOR = 'p, li, ul, ol, h1, h2, h3, h4, h5, h6, blockquote, td, th, figcaption, summary'

const COMPILED_PATTERNS = (__UI_PHRASES__.patterns || []).map((entry) => ({
  regex: new RegExp(entry.pattern, 'i'),
  replace: entry.replace,
}))

const EXACT_PHRASES = __UI_PHRASES__.exact || {}
const NORMALIZED_PHRASES = Object.create(null)

function normalizeKey(str) {
  return str
    .trim()
    .replace(/\u2026/g, '...')
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

;(function buildNormalizedIndex() {
  const keys = Object.keys(EXACT_PHRASES)
  for (let i = 0; i < keys.length; i += 1) {
    const k = keys[i]
    const norm = normalizeKey(k)
    if (!(norm in NORMALIZED_PHRASES)) {
      NORMALIZED_PHRASES[norm] = EXACT_PHRASES[k]
    }
  }
})()

function isPersianLocale(locale) {
  if (typeof locale !== 'string') return false
  const normalized = locale.trim().toLowerCase()
  return normalized === LOCALE_ID || normalized.startsWith('fa-') || normalized.startsWith('fa_')
}

function readActiveLocale(ctx) {
  try {
    const loc = ctx && ctx.locale
    if (loc) {
      if (typeof loc.getLocale === 'function') {
        const cur = loc.getLocale()
        if (typeof cur === 'string' && cur) return cur
      }
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
  if (!trimmed || trimmed.length > 260) return null
  if (PERSIAN_ARABIC_RE.test(trimmed)) return null
  if (TECHNICAL_TEXT_RE.test(trimmed)) return null

  const startIdx = rawText.indexOf(trimmed)
  const leading = rawText.slice(0, startIdx)
  const trailing = rawText.slice(startIdx + trimmed.length)

  // 1. Exact match
  if (Object.prototype.hasOwnProperty.call(EXACT_PHRASES, trimmed)) {
    const translated = EXACT_PHRASES[trimmed]
    if (translated && translated !== trimmed) {
      return leading + translated + trailing
    }
  }

  // 2. Normalized case/ellipsis/colon match
  const hasTrailingColon = trimmed.endsWith(':')
  const core = hasTrailingColon ? trimmed.slice(0, -1).trim() : trimmed
  const norm = normalizeKey(core)
  if (norm in NORMALIZED_PHRASES) {
    const translated = NORMALIZED_PHRASES[norm]
    if (translated && translated !== core) {
      return leading + translated + (hasTrailingColon ? ':' : '') + trailing
    }
  }

  // 3. Parameterized pattern match
  for (let i = 0; i < COMPILED_PATTERNS.length; i += 1) {
    const rule = COMPILED_PATTERNS[i]
    if (rule.regex.test(trimmed)) {
      const translated = trimmed.replace(rule.regex, rule.replace)
      if (translated !== trimmed) {
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

function isMonospaceElement(el) {
  if (!el || el.nodeType !== 1 || typeof getComputedStyle !== 'function') return false
  try {
    const ff = (getComputedStyle(el).fontFamily || '').toLowerCase()
    return (
      ff.includes('mono') ||
      ff.includes('consolas') ||
      ff.includes('menlo') ||
      ff.includes('fira code') ||
      ff.includes('jetbrains') ||
      ff.includes('courier')
    )
  } catch (_) {
    return false
  }
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
  const trackedLtrEls = new Set()
  const trackedAutoDirEls = new Set()

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

  function markAutoDirEditors(root) {
    if (!root || typeof root.querySelectorAll !== 'function') return
    const editors = root.querySelectorAll('textarea, [contenteditable="true"]')
    for (let i = 0; i < editors.length; i += 1) {
      const ed = editors[i]
      if (isInsideSelector(ed, STRICT_LTR_SELECTOR)) continue
      if (ed.getAttribute('dir') !== 'auto') {
        ed.setAttribute('dir', 'auto')
        trackedAutoDirEls.add(ed)
      }
    }
  }

  function applySmartBidi(root) {
    if (!root || typeof root.querySelectorAll !== 'function') return

    const blocks = root.querySelectorAll(BIDI_BLOCK_SELECTOR)
    for (let b = 0; b < blocks.length; b += 1) {
      const block = blocks[b]
      if (isInsideSelector(block, STRICT_LTR_SELECTOR)) continue

      const text = block.textContent || ''
      if (isMonospaceElement(block) || TECHNICAL_TEXT_RE.test(text.trim())) {
        if (block.getAttribute('data-dsh-ltr') !== 'true') {
          block.setAttribute('data-dsh-ltr', 'true')
          trackedLtrEls.add(block)
        }
        continue
      }

      const dir = classifyBlockDirection(text)
      if (dir && block.getAttribute('data-dsh-bidi') !== dir) {
        block.setAttribute('data-dsh-bidi', dir)
        trackedBidiEls.add(block)
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

    markAutoDirEditors(root)
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
      } catch (_) {}
    })
    trackedBidiEls.clear()

    trackedLtrEls.forEach((el) => {
      try {
        el.removeAttribute('data-dsh-ltr')
      } catch (_) {}
    })
    trackedLtrEls.clear()

    trackedAutoDirEls.forEach((el) => {
      try {
        el.removeAttribute('dir')
      } catch (_) {}
    })
    trackedAutoDirEls.clear()
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

  // 2. Register official Persian dictionaries for verified DSH namespaces
  const namespaces = Object.keys(__CORE_DICTS__)
  for (let i = 0; i < namespaces.length; i += 1) {
    const ns = namespaces[i]
    const dict = __CORE_DICTS__[ns]
    ctx.effect(
      () => ctx.locale.register(ns, LOCALE_ID, dict),
      `deepseek-harness-locale-fa: ${ns}`,
    )
  }

  // 3. Reversible runtime bridge on ctx.locale.bind & resolveText for zero-flicker
  //    Persian fallback on any namespace key not yet in core.json
  ctx.effect(() => {
    const loc = ctx && ctx.locale
    if (!loc) return

    const origBind = typeof loc.bind === 'function' ? loc.bind : null
    const origResolveText = typeof loc.resolveText === 'function' ? loc.resolveText : null
    const wrappedCache = new Map()

    if (origBind) {
      try {
        loc.bind = function patchedBind(ns) {
          if (wrappedCache.has(ns)) return wrappedCache.get(ns)
          const rawT = origBind.call(this, ns)
          if (typeof rawT !== 'function') return rawT
          const wrappedT = function translatedT(key, params) {
            const result = rawT(key, params)
            if (typeof result === 'string' && isPersianLocale(readActiveLocale(ctx))) {
              const fa = translateUiText(result)
              if (fa) return fa
            }
            return result
          }
          wrappedCache.set(ns, wrappedT)
          return wrappedT
        }
      } catch (_) {
        // Read-only locale object: fall back to DOM UI-chrome layer
      }
    }

    if (origResolveText) {
      try {
        loc.resolveText = function patchedResolveText(text) {
          const result = origResolveText.call(this, text)
          if (typeof result === 'string' && isPersianLocale(readActiveLocale(ctx))) {
            const fa = translateUiText(result)
            if (fa) return fa
          }
          return result
        }
      } catch (_) {
        // Ignore if non-writable
      }
    }

    return () => {
      wrappedCache.clear()
      if (origBind) {
        try {
          loc.bind = origBind
        } catch (_) {}
      }
      if (origResolveText) {
        try {
          loc.resolveText = origResolveText
        } catch (_) {}
      }
    }
  }, 'deepseek-harness-locale-fa: runtime-locale-bridge')

  // 4. Surgical RTL + Smart BiDi + DOM UI-chrome fallback controller
  const controller = createPersianDomController()

  ctx.effect(() => {
    const syncNow = (maybeLocale) => {
      const next = typeof maybeLocale === 'string' && maybeLocale ? maybeLocale : readActiveLocale(ctx)
      controller.sync(next)
    }

    syncNow()

    const disposers = []

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

    if (ctx.locale && typeof ctx.locale.subscribe === 'function') {
      const unsub = ctx.locale.subscribe(() => syncNow())
      if (typeof unsub === 'function') disposers.push(unsub)
    }

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
        } catch (_) {}
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
