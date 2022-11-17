import { defineConfig } from 'npm:vite@^3.2.3';
import react from 'npm:@vitejs/plugin-react@^2.2.0';

// Deps
import './deps.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
