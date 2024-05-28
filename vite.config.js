import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite.config.js




  // other Vite configurations...
  resolve: {
    alias: {
      // Define your alias here
      'font-awesome': 'font-awesome/css/font-awesome.css',
    },
  },
});


