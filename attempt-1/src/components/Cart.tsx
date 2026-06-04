import { totalCartCost } from "../lib/utils"
import { type CartItem } from "../types/CartItem"

type CartProps = {
    items: CartItem[];
}

export function Cart({ items }: CartProps) {
    const totalCost = totalCartCost(items);

    return (
        <div>
            Total: £{totalCost} {Number(totalCost) > 0 && (<>inc. delivery</>)}
        </div>
    )
}