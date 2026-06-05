import path from 'node:path'
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babel from '@rolldown/plugin-babel'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { type Product } from './src/types/Product'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbFile = join(__dirname, 'api/db.json')

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ]
  },
  optimizeDeps: {
    include: ["tslib"],
  },
  build: {
    rolldownOptions: {
      external: ['tslib']
    }
  },
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'dev-api-products',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {



          if (req.method === 'GET' && req.url?.startsWith('/api/products')) {
            const productId = req.url?.split('/')[3];
            try {
              const body = await readFile(dbFile, 'utf-8')
              res.setHeader('Content-Type', 'application/json')

              switch(productId) {
                case undefined:
                  res.end(body)
                  return;
                default:
                  const products = JSON.parse(body).products;
                  const product = products.find((p: Product) => p.id === productId)
                  res.end(JSON.stringify(product))
                  return
              }
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
