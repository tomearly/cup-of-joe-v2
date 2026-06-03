import type { CheckoutItem } from "../types/CheckoutItem"

type CheckoutProps = {
    items: CheckoutItem[];
}

function Checkout({items}: CheckoutProps) {

    const DELIVERY_FEE = items.length > 0 ? 2 : 0;
    const totalCost = items.reduce((sum, item) => sum + (item.price * item.quantity), DELIVERY_FEE);

    return (
        <>
            <div className="pt-4">
                <ul className="mb-2">
                    {items.map(item => (
                        <li key={item.productId}>{item.name} x {item.quantity}</li>
                    ))}
                </ul>
                Total: £{ totalCost.toFixed(2) } { totalCost > 0 && (<>inc. delivery</>) }
            </div>
        </>
    )
}

export default Checkout;