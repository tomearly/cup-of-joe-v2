import { type ProductBase } from "./ProductBase"

export type FoodProduct = ProductBase & {
    category: "food";
    reheatingInstructions?: string
}