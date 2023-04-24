import React, { useState, useEffect  } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import Homepage from "./Components/Homepage";
import Nav from "./Components/Nav";
import ItemCard from './Components/ItemCard'
import { inventory } from './Inventory/data'

const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    let quantityAdded = inventory.map(item => {
      return {...item, quantity: 0}
    })
    setProducts(quantityAdded)
  }, [])

  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/shop' >
            <Route index element={<Shop products={products} />} />
            <Route path=':id' element={<ItemCard />} />
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App