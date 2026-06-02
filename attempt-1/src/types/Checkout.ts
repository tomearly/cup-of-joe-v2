import { type Drink } from "./Drink";

export type Checkout = {
        items: Drink[],
        totalCost: number,
}