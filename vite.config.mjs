import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ['src/**/*.{js,ts}'],
      exclude: ['src/**/__tests__/**', 'src/index.ts'],
    },
  },
})
