import { Routes, Route } from "react-router";
import { ProductPage } from "@/pages/product-page";
import { OrderForm } from "@/pages/order-form";
import { Menu } from "@/components/Menu"
import { Cart } from "@/components/Cart"
import { CheckoutDrawer } from '@/components/CheckoutDrawer'
import { CartProvider } from "@/context/cart"

function App() {
  return (
    <CartProvider>
      <div className="coffee-shop">
        <header>
          <h1 className="text-4xl font-bold">Coffee Shop</h1>
          <Cart />
        </header>
        <Routes>
          <Route>
            <Route path="/" element={<Menu />} />
            <Route path="/product-page/:id" element={<ProductPage />} />
            <Route path="/order" element={<OrderForm />} />
          </Route>
        </Routes>
        <CheckoutDrawer />
      </div>
    </CartProvider>
  )
}

export default App
