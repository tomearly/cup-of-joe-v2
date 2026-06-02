import { type Drink } from "./Drink";

export type Menu = {
    id: number,
    name: string,
    drinks: Drink[]
}