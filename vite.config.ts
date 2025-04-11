// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import path

// Add this import if using TypeScript for config
import type { UserConfig } from 'vitest/config'

// Combine Vite config and Vitest config
const config: UserConfig & { test: any } = { // Use 'any' for test if types conflict initially
  plugins: [react()],
  resolve: { // Make sure alias resolution works in tests
    alias: {
      "@": path.resolve(__dirname, "./src"), // Adjust if your '@' alias points elsewhere
      "hooks": path.resolve(__dirname, "./hooks"),
      "lib": path.resolve(__dirname, "./lib"),
      "components": path.resolve(__dirname, "./src/components"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Path to setup file (we'll create this next)
    css: false, // Optional: Faster tests if CSS parsing isn't needed
    coverage: { // Optional: Add coverage reporting
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*', 'hooks/**/*'],
      exclude: [
        'src/main.tsx',
        'src/index.css',
        'src/vite-env.d.ts',
        'src/setupTests.ts',
        '**/*.d.ts',
        '**/*.config.*', // Exclude config files
        '.eslintrc.cjs', // Exclude lint config
        'public/**/*', // Exclude public assets
        'dist/**/*', // Exclude build output
      ],
    }
  }
}

export default defineConfig(config)