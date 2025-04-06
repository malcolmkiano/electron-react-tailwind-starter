// @ts-expect-error: types are defined but not being picked up by IDE
// eslint-disable-next-line import/no-unresolved
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [tailwindcss()],
});
