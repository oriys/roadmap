import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const rawBasePath = process.env.BASE_PATH ?? ""
const normalizedBasePath =
  rawBasePath === "" ? "" : rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`
const base =
  normalizedBasePath === ""
    ? "/"
    : normalizedBasePath.endsWith("/")
      ? normalizedBasePath
      : `${normalizedBasePath}/`

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
