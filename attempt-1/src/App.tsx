import { useState } from "react";
import Menu from "./components/Menu"
import Checkout from "./components/Checkout"
import { type CheckoutItem } from "./types/CheckoutItem"
import { type Product } from "./types/Product"

import './App.css'

function App() {

  const [items, setCheckoutItems] = useState<CheckoutItem[]>([])
  
  const addToCheckout = (product: Product) => {

    const itemInCheckoutIndex = items.findIndex(p => p.productId === product.id);

    if(itemInCheckoutIndex > -1) {
      setCheckoutItems(prev =>
        prev.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {

      const checkoutItem = {
        productId: product.id,
        quantity: 1,
        price: product.price,
        name: product.name
      }

      setCheckoutItems(prev => [...prev, checkoutItem])
    }
  }

  return (
    <>
      <div className="App">
        <h1>Coffee Shop</h1>
        <Checkout items={items} />
        <Menu addToCheckout={addToCheckout} />
      </div>
    </>
  )
}

export default App
