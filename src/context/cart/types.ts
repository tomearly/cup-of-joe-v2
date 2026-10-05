import { type CartItem } from "@/types/CartItem"

export interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
    checkoutDrawerOpen: boolean;
    activeProduct: CartItem;
    closeCheckoutDrawer: () => void
}