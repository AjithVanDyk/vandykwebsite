import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: '/', // Reverted to root path for Vercel deployment
      optimizeDeps: {
        exclude: ['lucide-react'],
      },
    });
