/**
 * Host-side entry point for deepseek-harness-locale-fa.
 *
 * DeepSeek Harness discovers client-only bundles via the host Loader entry
 * registered in cordis.patch.yml together with `dsh.client` in package.json.
 * All UI localization, RTL layout, and BiDi isolation logic runs in the
 * browser bundle (`./lib/client.js`).
 */
export const name = 'locale-fa'

export function apply() {
  // Intentionally minimal host entry; browser localization mounts via ./client
}
