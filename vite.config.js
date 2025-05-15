import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      events: 'events/', // এই alias ব্রাউজারকে বলে events polyfill ব্যবহার করতে
    },
  },
})
