#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'))
const coreDicts = JSON.parse(fs.readFileSync(path.join(rootDir, 'dict', 'fa', 'core.json'), 'utf8'))
const uiPhrases = JSON.parse(fs.readFileSync(path.join(rootDir, 'dict', 'fa', 'ui-phrases.json'), 'utf8'))
const rtlCss = fs.readFileSync(path.join(rootDir, 'src', 'rtl.css'), 'utf8')
const runtimeSrc = fs.readFileSync(path.join(rootDir, 'src', 'client-runtime.js'), 'utf8')

// Strip any leading block comment from runtimeSrc so the generated file starts
// cleanly with the single top-level window.__ModuleLoader__.load(...) statement.
const cleanedRuntime = runtimeSrc.replace(/^\/\*[\s\S]*?\*\/\s*/, '').trim()

const indentedBody = cleanedRuntime
  .split('\n')
  .map((line) => (line.length ? '    ' + line : ''))
  .join('\n')

// Escape </script so the bundle can never break out of an inline/combo script tag
const safeJson = (value) => JSON.stringify(value).replace(/<\//g, '<\\/')

const bundle = `window.__ModuleLoader__.load({
  id: ${JSON.stringify(pkg.name)},
  factory(require) {
    "use strict";
    const module = { exports: {} };
    const exports = module.exports;
    const __CORE_DICTS__ = ${safeJson(coreDicts)};
    const __UI_PHRASES__ = ${safeJson(uiPhrases)};
    const __RTL_CSS__ = ${safeJson(rtlCss)};

${indentedBody}

    return module.exports;
  },
});
`

const outDir = path.join(rootDir, 'lib')
fs.mkdirSync(outDir, { recursive: true })
const outFile = path.join(outDir, 'client.js')
fs.writeFileSync(outFile, bundle, 'utf8')

const nsCount = Object.keys(coreDicts).length
const keyCount = Object.values(coreDicts).reduce((sum, ns) => sum + Object.keys(ns).length, 0)
const phraseCount = Object.keys(uiPhrases.exact || {}).length

console.log(
  `Built lib/client.js (${Buffer.byteLength(bundle, 'utf8')} bytes) — ${nsCount} namespaces, ${keyCount} dictionary keys, ${phraseCount} UI chrome phrases.`,
)
