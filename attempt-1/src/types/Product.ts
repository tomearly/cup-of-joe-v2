import { type ProductCategory } from "../types/ProductCategory"

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
}