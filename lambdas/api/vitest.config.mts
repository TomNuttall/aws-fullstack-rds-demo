import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'

export default defineConfig({
  test: {
    env: loadEnv('test.local', '../../', ''),
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
  },
})
