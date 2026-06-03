import { type Product } from "./Product"

export type DrinkProduct = Product & {
    category: "drink";
    hot: boolean;
}