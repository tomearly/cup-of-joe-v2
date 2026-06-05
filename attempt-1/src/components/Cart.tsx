import { useCart } from "@/context/cart";

export function Cart() {
    const { cartCount, cartTotal } = useCart();

    return (
        <div>
            Total: {cartCount} items @ £{cartTotal} {Number(cartTotal) > 0 && (<>inc. delivery</>)}
        </div>
    )
}