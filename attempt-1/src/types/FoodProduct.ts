import { type Product } from "./Product"

export interface FoodProduct extends Product {
    servedHot?: boolean;
    reheatingInstructions?: boolean;
}