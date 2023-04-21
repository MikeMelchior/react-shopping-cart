import React, { useEffect, useId, useState } from 'react'
import Nav from './Nav'
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
      { name: 'apple', cost: 0.50, img: apple},
      { name: 'cucumber', cost: 2.00, img: cucumber },
      { name: 'banana', cost: 1.25, img: banana },
      { name: 'onion', cost: 3.80, img: onion },
      { name: 'carrot', cost: 1.00, img: carrot },
      { name: 'broccoli', cost: 1.80, img: broccoli },
      { name: 'spinach', cost: 4.10, img: spinach },
      { name: 'lemon', cost: 0.80, img: lemon },
      { name: 'mango', cost: 2.00, img: mango },
      { name: 'avocado', cost: 0.25, img: avocado },
    ]
    setProducts(inventory)
  }, [])

  
  return (
    <div className='shop'>
      <Nav />
      {/* <Cart /> */}
      <h1>Local Produce</h1>
      <div className="items">
        {products.map(p => (
          <div key={uniqid()} className='item'> 
            <p className='item-title'>{p.name}</p>
            <img id='product-image' src={p.img} alt="food" />
            <div className='item-handler'>
              <p>${p.cost}</p>

            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Shop