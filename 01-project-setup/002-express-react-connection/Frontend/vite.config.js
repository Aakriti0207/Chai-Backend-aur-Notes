import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      "/proxy": "http://localhost:4000"
    }
  },
  plugins: [react()],
})
