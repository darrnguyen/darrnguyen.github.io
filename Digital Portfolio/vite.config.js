import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    
  },
  build: {
    outDir: "../static"
  },
  assetsInclude: ['**/*.html'],
  base: "darrnguyen.github.io"
})
