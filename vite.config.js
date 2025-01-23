import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.29.22', // Allow connections from your local network
    port: 3000, // Optional: specify port
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  optimizeDeps: {
    include: ['react-helmet'] // or 'react-helmet' if you are sticking with it
  }
})
