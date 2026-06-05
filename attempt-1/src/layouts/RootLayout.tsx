// src/layouts/RootLayout.tsx
import { Outlet, Link } from "react-router";
import { Cart } from "@/components/Cart"
import { CheckoutDrawer } from "@/components/CheckoutDrawer"

export function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col">
           
            <main className="flex-1 max-w-6xl w-full mx-auto p-6">
                 <Link to="/">
                <div className="cursor-pointer">
                    <h1 className="text-4xl font-bold">Coffee Shop</h1>
                    <Cart />
                </div>
            </Link>
                <Outlet />
            </main>
            <CheckoutDrawer />
        </div>
    );
}