import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    rollupOptions: {
      plugins: [tailwindcss],
    },
  },
  base: '',
});

 


