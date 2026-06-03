import { type CheckoutItem } from "../types/CheckoutItem"
import { type CheckoutAction } from "../types/CheckoutAction"

export function checkoutReducer(
  state: CheckoutItem[],
  action: CheckoutAction
): CheckoutItem[] {
  switch (action.type) {
    case "add": {
      const product = action.product
      const existing = state.find(item => item.productId === product.id)

      if (existing) {
        return state.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [
        ...state,
        {
          productId: product.id,
          quantity: 1,
          price: product.price,
          name: product.name,
        },
      ]
    }

    case "remove":
      return state.filter(item => item.productId !== action.productId)

    case "updateQuantity":
      return state
        .map(item =>
          item.productId === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        )
        .filter(item => item.quantity > 0)

    default:
      return state
  }
}