import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://luisvalladaresc.github.io/curso-basico-github-actions/',
  plugins: [react()],
})
