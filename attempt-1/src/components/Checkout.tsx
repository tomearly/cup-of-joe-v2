import type { Drink } from "../types/Drink"

type CheckoutProps = {
    items: Drink[];
    setItems: () => void;
    totalCost: number;
}

function Checkout({items, setItems, totalCost }: CheckoutProps) {
    return (
        <>
            <div>
                Checkout {totalCost}
                <ul>
                    
                </ul>     
            </div>
        </>
    )
}

export default Checkout;