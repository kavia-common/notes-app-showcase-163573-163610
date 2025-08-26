import { defineConfig } from 'vite'

/**
 * Dev server aligned with workspace preview (port 3000).
 * CORS open for embedding in preview iframe.
 */
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['.kavia.ai'],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watch: {
      usePolling: true,
    },
  },
})
