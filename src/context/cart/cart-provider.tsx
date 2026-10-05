import { useState, type ReactNode } from "react"
import { CartContext } from "./cart-context"
import { type CartItem } from "@/types/CartItem"

export function CartProvider({ children }: { children: ReactNode }) {

    const BASE_CART_ITEM = {
        productId: '',
        quantity: 0,
        name: '',
        price: 0,
    }

    const [cart, setCart] = useState<CartItem[]>([])
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false)
    const [activeProduct, setActiveProduct] = useState<CartItem>(BASE_CART_ITEM)

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0); 

    const addToCart = (newItem: Omit<CartItem, "quantity">) => {
        let finalQuantity = 1;

        setCart((prevCart) => {
            const exists = prevCart.find(
                (item) => item.productId === newItem.productId
            );

            if(exists) {
                finalQuantity = exists.quantity + 1;
                return prevCart.map((item) =>
                    item.productId === newItem.productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
            }          

            return [...prevCart, { ...newItem, quantity: 1}]
        })
        setActiveProduct({ ...newItem, quantity: finalQuantity})
        setCheckoutDrawerOpen(true)
    }

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.productId !== id))
    }

    const clearCart = () => setCart([])

    const closeCheckoutDrawer = () => setCheckoutDrawerOpen(false)

    return (
        <CartContext value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, cartCount, checkoutDrawerOpen, activeProduct, closeCheckoutDrawer }}>
            {children}
        </CartContext>
    )
}