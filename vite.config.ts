import path from "path"
import { defineConfig } from 'vite'
import { UserConfig } from "vite"
import { InlineConfig } from "vitest/node"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test:{
  globals:true,
  setupFiles:['./test/setup.ts'],
  environment:'happy-dom'
  }
} as UserConfig &{
  test:InlineConfig
})
