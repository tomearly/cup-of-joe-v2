import { useState } from "react";
import Menu from "./components/Menu"
import Checkout from "./components/Checkout"
import { type Drink } from "./types/Drink"

import './App.css'

function App() {

  const [items, setCheckoutItems] = useState<Drink[]>([])

  const addToCheckout = (drink: Drink) => {

    const drinkToUpdateIndex = items.findIndex(item => item.id === drink.id);

    if(drinkToUpdateIndex > -1) {
      const quantity = items[drinkToUpdateIndex].quantity + 1;
      items[drinkToUpdateIndex].quantity = quantity
      setCheckoutItems([...items])
    } else {
      drink.quantity = 1;
      setCheckoutItems([...items, drink])
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
