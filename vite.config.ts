import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/la_eloteria_bakersfield/', 
  plugins: [react()],
});
