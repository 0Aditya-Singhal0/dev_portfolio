import { defineConfig } from 'cf/config'

export default defineConfig({
  accountId: 'ef9a68d5429e859b3cf162308b43257e',
  worker: {
    name: 'aditya-portfolio',
    compatibilityDate: '2026-10-07',
    assets: { notFoundHandling: 'single-page-application' },
    domains: ['as.radyanlab.com'],
    observability: { enabled: true, traces: { enabled: true } },
  },
})

