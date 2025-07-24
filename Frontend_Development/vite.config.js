import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // crucial for correct routing & asset loading in Vercel
  plugins: [react()]
})

