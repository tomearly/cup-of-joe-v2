import type { VercelRequest, VercelResponse } from '@vercel/node'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { type Product } from '../../src/types/Product'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbFile = join(__dirname, '../db.json')

export default async function handler(req: VercelRequest, res: VercelResponse) {    
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { id } = req.query

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  try {
    const json = await readFile(dbFile, 'utf-8')
    const productsData = JSON.parse(json)

    const x = productsData.products.find((p: Product) => p.id === id);

    return res.status(200).json(x)
  } catch(error: any) {
    return res.status(500).json({ error: error.message });
  }
}