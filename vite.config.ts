import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      global: 'globalThis',
      'process.env': {
        REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY: env.REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY,
      },
    },
    plugins: [react(), eslint()],
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src'),
      },
    },
  }
})


