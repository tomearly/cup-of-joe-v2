import type { VercelRequest, VercelResponse } from '@vercel/node'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbFile = join(__dirname, 'db.json')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const json = await readFile(dbFile, 'utf-8')
  const productsData = JSON.parse(json)
  res.status(200).json(productsData)
}