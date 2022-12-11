import { defineConfig } from 'npm:vite@^4.0.0';
import reactBabel from 'npm:@vitejs/plugin-react@^3.0.0';
import reactSwc from 'npm:@vitejs/plugin-react-swc@^3.0.0';

// TOGGLE THIS IF YOU SEE STRANGE BEHAVIOR IN YOUR APP.
// See README of plugin-react-swc: https://github.com/vitejs/vite-plugin-react-swc
const useSwc = true;
const react = useSwc ? reactSwc : reactBabel;

// Deps
import './deps.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
