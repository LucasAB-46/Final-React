import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Forzar la inclusión de archivos .js como JSX, resolviendo ambigüedades.
      include: '**/*.{jsx,js,tsx,ts}', 
    }),
  ],
  // También agregamos la configuración de esbuild para ser redundantes y asegurar el parseo
  esbuild: {
    include: /\.(jsx?|tsx?)$/,
    loader: 'jsx', 
  },
});