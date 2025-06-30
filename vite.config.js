import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // importante para funcionar no GitHub Pages e Vercel
  build: {
    outDir: 'dist', // pasta de saída padrão
  },
  server: {
    port: 5173, // opcional
  }
})
