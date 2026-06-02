import { useState } from "react";
import Menu from "./components/Menu"
import Checkout from "./components/Checkout"
import { type Drink } from "./types/Drink"

import './App.css'

function App() {

  const [items, setCheckoutItems] = useState<Drink[]>([])

  const addToCheckout = (drink: Drink) => {
    setCheckoutItems([...items, drink])
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
