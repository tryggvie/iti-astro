// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
        ],
      },
    },
  },
});
