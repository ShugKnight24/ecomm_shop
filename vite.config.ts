import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: "build",
  },
})
