import { useState } from "react";
import type { Drink } from "./types/Drink"
import Checkout from "./components/Checkout"
import Menu from "./components/Menu"

import './App.css'

function App() {

  const [checkout, setCheckout] = useState<Drink[]>();

  const addToCheckout = (drink: Drink) => {
    console.log('Adding drink ', drink);
  }

  return (



    <>
      <div className="App">
        <h1>Coffee Shop</h1>
        {/* <Checkout checkout={checkout} setCheckout={setCheckout}/> */}
        <Menu addToCheckout={addToCheckout} />
      </div>
    </>
  )
}

export default App
