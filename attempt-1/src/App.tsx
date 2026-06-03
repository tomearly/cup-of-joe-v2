import { useReducer } from "react";
import { checkoutReducer } from "./reducers/checkoutReducer"
import Menu from "./components/Menu"
import Checkout from "./components/Checkout"
import { type CheckoutItem } from "./types/CheckoutItem"
import { type Product } from "./types/Product"

import './App.css'

function App() {
 
  const [items, dispatch] = useReducer(checkoutReducer, [] as CheckoutItem[])

  const addToCheckout = (product: Product) => {
    dispatch({ type: "add", product })
  }

  return (
    <>
      <div className="coffee-shop">
        <h1 className="text-4xl font-bold">Coffee Shop</h1>
        <Checkout items={items} />
        <Menu addToCheckout={addToCheckout} />
      </div>
    </>
  )
}

export default App
