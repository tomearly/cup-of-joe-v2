import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbFile = join(__dirname, 'api/db.json')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'dev-api-products',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.method === 'GET' && req.url?.startsWith('/api/products')) {
            try {
              const body = await readFile(dbFile, 'utf-8')
              res.setHeader('Content-Type', 'application/json')
              res.end(body)
            } catch (error) {
              next(error)
            }
          } else {
            next()
          }
        })
      }
    }
  ]
})
