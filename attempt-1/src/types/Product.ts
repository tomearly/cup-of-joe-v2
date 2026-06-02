import { type ProductCategory } from "../types/ProductCategory"

export type Product = {
  id: string,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  category: ProductCategory,
}