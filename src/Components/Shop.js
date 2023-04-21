import React, { useEffect, useId, useState } from 'react'
import Cart from './Cart'
import uniqid from 'uniqid'
import apple from '../images/apple.png'
import cucumber from '../images/cucumber.png'
import banana from '../images/banana.png'
import onion from '../images/onion.png'
import carrot from '../images/carrot.png'
import broccoli from '../images/broccoli.png'
import spinach from '../images/spinach.png'
import lemon from '../images/lemon.png'
import mango from '../images/mango.png'
import avocado from '../images/avocado.png'


function Shop() {
  const [products, setProducts] = useState([])
  

  useEffect(() => {
    const inventory = [
      { name: 'apple', cost: 0.5, img: apple},
      { name: 'cucumber', cost: 2, img: cucumber },
      { name: 'banana', cost: 1.25, img: banana },
      { name: 'onion', cost: 3.8, img: onion },
      { name: 'carrot', cost: 1, img: carrot },
      { name: 'broccoli', cost: 1.80, img: broccoli },
      { name: 'spinach', cost: 4.1, img: spinach },
      { name: 'lemon', cost: 0.8, img: lemon },
      { name: 'mango', cost: 2, img: mango },
      { name: 'avocado', cost: 0.25, img: avocado },
    ]
    setProducts(inventory)
  }, [])

  
  return (
    <div className='shop'>
      <Cart />
      <h1>Produce Store</h1>
      <div className="items">
        {products.map(p => (
          <div key={uniqid()} className='item'>
            <img id='product-image' src={p.img} alt="food" />
            <p>{p.name}</p>
            <p>{p.cost}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Shop