import { useReducer, useState } from "react";
import { Routes, Route } from "react-router";
import { checkoutReducer } from "@/reducers/checkoutReducer"
import { ProductPage } from "@/pages/product-page";
import { Menu } from "@/components/Menu"
import { Cart } from "@/components/Cart"
import { Checkout } from '@/components/Checkout'
import { type CartItem } from "@/types/CartItem"
import { type Product } from "@/types/Product"

function App() {

  const [items, dispatch] = useReducer(checkoutReducer, [] as CartItem[])
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)

  const addToCheckout = (product: Product) => {
    setActiveProduct(product)
    dispatch({ type: "add", product })
  }

  return (
    <div className="coffee-shop">
      <header>
        <h1 className="text-4xl font-bold">Coffee Shop</h1>
        <Cart items={items} />
      </header>
      <Routes>
        <Route>
          <Route path="/" element={<Menu addToCheckout={addToCheckout} />} />
          <Route path="/product-page/:id" element={<ProductPage />} />
        </Route>
      </Routes>
      <Checkout
        isOpen={activeProduct !== null}
        onClose={() => setActiveProduct(null)}
        product={activeProduct}
        items={items}
      />
    </div>
  )
}

export default App
