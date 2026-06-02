import type { Drink } from "../types/Drink"

type CheckoutProps = {
    items: Drink[];
}

function Checkout({items}: CheckoutProps) {

    const DELIVERY_FEE = items.length > 0 ? 2 : 0;
    const totalCost = items.reduce((sum, item) => sum + item.price, DELIVERY_FEE);

    return (
        <>
            <div>
                <ul>

                    {items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
                Total £{totalCost.toFixed(2)} (inc. £2.00 Delivery)
            </div>
        </>
    )
}

export default Checkout;