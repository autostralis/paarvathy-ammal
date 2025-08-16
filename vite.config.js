import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Use '/' on Vercel, '/paarvathy-ammal/' on GitHub Pages
const isVercel = process.env.VERCEL; // Vercel sets this env var
const base = isVercel ? '/' : '/paarvathy-ammal/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
