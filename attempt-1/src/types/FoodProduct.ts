import { type Product } from "./Product"

export type FoodProduct = Product & {
    category: "food";
    reheatingInstructions?: string
}