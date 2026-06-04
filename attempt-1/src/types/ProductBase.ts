import { type ProductCategory } from "./ProductCategory"
import { type Allergen } from "./Allergens"

export interface ProductBase {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
  allergens?: Allergen[];
}