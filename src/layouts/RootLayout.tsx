// src/layouts/RootLayout.tsx
import { Outlet, Link } from "react-router";
import { Cart } from "@/components/Cart"
import { CheckoutDrawer } from "@/components/CheckoutDrawer"

export function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col">
           
            <main className="flex-1 max-w-6xl w-full mx-auto p-6">
                <div className="flex w-full cursor-pointer justify-between items-center mb-6">
                    <Link to="/">
                        <h1 className="text-4xl font-bold">Coffee Shop</h1>
                    </Link>
                    <Link to="/order" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                       <Cart />
                    </Link>
                </div>
                <Outlet />
            </main>
            <CheckoutDrawer />
        </div>
    );
}