import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // This matches your repository name exactly [2]
  plugins: [react()],
})