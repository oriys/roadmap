import path from "path"
import fs from "fs"
import { defineConfig, type Plugin } from "vite"
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

function copy404Plugin(): Plugin {
  return {
    name: "copy-404",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist")
      const indexPath = path.join(distDir, "index.html")
      const notFoundPath = path.join(distDir, "404.html")
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
      }
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), copy404Plugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
