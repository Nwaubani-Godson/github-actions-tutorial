import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test APIs (like `describe`, `it`, etc.)
    environment: 'jsdom', // Simulates a browser-like environment
  },
});
