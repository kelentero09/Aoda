import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: builds to ./dist with relative asset paths.
// For a project site (username.github.io/repo), set base to '/<repo>/'.
// Default './' works for both user sites and custom domains.
export default defineConfig({
  plugins: [react()],
  base: './',
})
