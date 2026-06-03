import { type Product } from "./Product"

export type CheckoutAction =
  | { type: "add"; product: Product }
  | { type: "remove"; productId: string }
  | { type: "updateQuantity"; productId: string; quantity: number }