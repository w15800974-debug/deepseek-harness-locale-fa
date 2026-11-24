#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const errors = []
const assert = (cond, msg) => {
  if (!cond) errors.push(msg)
}

// 1. Validate package.json
const pkgPath = path.join(rootDir, 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
assert(pkg.name === 'deepseek-harness-locale-fa', 'package.json name must be deepseek-harness-locale-fa')
assert(pkg.dsh?.bundle?.patch === './cordis.patch.yml', 'package.json must declare dsh.bundle.patch')
assert(pkg.dsh?.client?.platform === 'web', 'package.json must declare dsh.client.platform = "web"')
assert(pkg.exports?.['./client'] === './lib/client.js', 'package.json must export ./client -> ./lib/client.js')
assert(
  pkg.exports?.['./cordis.patch.yml'] === './cordis.patch.yml',
  'package.json must export ./cordis.patch.yml',
)

// 2. Validate cordis.patch.yml
const patchText = fs.readFileSync(path.join(rootDir, 'cordis.patch.yml'), 'utf8')
assert(patchText.includes(`name: ${pkg.name}`), 'cordis.patch.yml must reference exact package name')

// 3. Validate JSON dictionaries & locale metadata (no BOM, no U+200B ZWSP)
const jsonFiles = [
  'locale/en.json',
  'locale/fa.json',
  'dict/fa/core.json',
  'dict/fa/ui-phrases.json',
]

for (const rel of jsonFiles) {
  const raw = fs.readFileSync(path.join(rootDir, rel), 'utf8')
  assert(!raw.includes('\uFEFF'), `${rel} contains forbidden BOM (U+FEFF)`)
  assert(!raw.includes('\u200B'), `${rel} contains forbidden zero-width space (U+200B)`)
  try {
    JSON.parse(raw)
  } catch (err) {
    errors.push(`${rel} is invalid JSON: ${err.message}`)
  }
}

// 4. Validate lib/client.js bundle contract (Discussion #5899, #6202, #12932)
const clientPath = path.join(rootDir, 'lib', 'client.js')
assert(fs.existsSync(clientPath), 'lib/client.js must exist (run npm run build)')

if (fs.existsSync(clientPath)) {
  const bundle = fs.readFileSync(clientPath, 'utf8')
  assert(bundle.length > 0, 'lib/client.js must not be empty')
  assert(!bundle.startsWith('\uFEFF'), 'lib/client.js must not start with UTF-8 BOM')
  assert(
    bundle.trimStart().startsWith('window.__ModuleLoader__.load({'),
    'lib/client.js must begin with a single window.__ModuleLoader__.load({...}) statement',
  )
  assert(
    bundle.includes(`id: ${JSON.stringify(pkg.name)}`),
    'lib/client.js __ModuleLoader__.load id must match package.json name',
  )

  // Verify zero top-level identifier collisions when concatenated with another bundle
  const comboScript = `
${bundle}
window.__ModuleLoader__.load({ id: 'other-plugin', factory() { const module = { exports: {} }; return module.exports; } });
`
  try {
    new vm.Script(comboScript, { filename: 'combo-check.js' })
  } catch (err) {
    errors.push(`Combo concatenation SyntaxError: ${err.message}`)
  }
}

if (errors.length > 0) {
  console.error('CHECK FAILED:')
  for (const e of errors) console.error('  -', e)
  process.exit(1)
}

console.log('ALL CHECKS PASSED: manifest, dictionaries, and __ModuleLoader__ bundle contract verified.')
