import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/threejs-portfolio/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/main.jsx",
    },
  },
});
