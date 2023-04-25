import React, { useState, useEffect  } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import Homepage from "./Components/Homepage";
import Nav from "./Components/Nav";
import ItemCard from './Components/ItemCard'
import { inventory } from './Inventory/data'
import './styling/styles.css'

const App = () => {

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [cartItems, setCartItems] = useState([])


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
            <Route 
              index 
              element={<Shop 
                          products={products}
                          setProduct={setProduct} 
                        />} 
            />
            <Route 
              path=':id' 
              element={<ItemCard  
                          product={product}
                          cartItems={cartItems}
                          setCartItems={setCartItems}
                        />} 
            />
          </Route>
          <Route 
            path="/cart" 
            element={<Cart
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      />}
          />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App