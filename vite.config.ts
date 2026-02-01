import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Satwik_Portfolio/', // Change this to '/your-repo-name/' when deploying to GitHub Pages
})
