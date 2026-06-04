import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type CartItem } from "../types/CartItem"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function totalCartCost(items: CartItem[]) {
    const DELIVERY_FEE = items.length > 0 ? 2 : 0
    return items.reduce((sum, item) => sum + (item.price * item.quantity), DELIVERY_FEE).toFixed(2)
}