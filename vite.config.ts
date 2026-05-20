import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// On GitHub Pages the site is served from /<repo>/, so the production build
// needs base '/Kuro-Oro/'. The dev server stays at '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Kuro-Oro/' : '/',
  plugins: [react()],
}))
