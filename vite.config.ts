import { defineConfig, loadEnv } from 'vite';
import { URL, fileURLToPath } from 'url';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: mode === 'production' ? 'https://pinalysis-topics.netlify.app/' : '/',
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // Fix: __dirname is not available in ES modules, use import.meta.url instead.
          '@': fileURLToPath(new URL('.', import.meta.url)),
        }
      },
      build: {
        copyPublicDir: true,
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === 'favicon.png') {
                return 'images/favicon.png';
              }
              return 'assets/[name]-[hash][extname]';
            },
          },
        },
      }
    };
});