import { type ProductBase } from "./ProductBase"

export type DrinkProduct = ProductBase & {
    category: "drink";
    hot: boolean;
}