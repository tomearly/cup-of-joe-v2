import { useReducer } from "react";
import { checkoutReducer } from "./reducers/checkoutReducer"
import Menu from "./components/Menu"
import Checkout from "./components/Checkout"
import { type CheckoutItem } from "./types/CheckoutItem"
import { type Product } from "./types/Product"

import { Routes, Route } from "react-router";
import ProductPage from "@/pages/product-page";
import './App.css'

function App() {

  const [items, dispatch] = useReducer(checkoutReducer, [] as CheckoutItem[])

  const addToCheckout = (product: Product) => {
    dispatch({ type: "add", product })
  }

  return (
    <div className="coffee-shop">
      <header>
        <h1 className="text-4xl font-bold">Coffee Shop</h1>
        <Checkout items={items} />
      </header>
      <Routes>
        <Route>
          <Route path="/" element={<Menu addToCheckout={addToCheckout} />} />
          <Route path="/product-page/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
