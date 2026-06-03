import { type ProductCategory } from "./ProductCategory"

export interface ProductBase {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
}