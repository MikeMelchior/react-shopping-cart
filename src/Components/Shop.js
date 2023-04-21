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
import ItemCard from './ItemCard'


function Shop() {
  const [products, setProducts] = useState([])
  const [item, setItem] = useState({});
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    const inventory = [
      { name: 'apple', cost: 0.50, img: apple, quantity: 0},
      { name: 'cucumber', cost: 2.00, img: cucumber, quantity: 0 },
      { name: 'banana', cost: 1.25, img: banana, quantity: 0 },
      { name: 'onion', cost: 3.80, img: onion, quantity: 0 },
      { name: 'carrot', cost: 1.00, img: carrot, quantity: 0 },
      { name: 'broccoli', cost: 1.80, img: broccoli, quantity: 0 },
      { name: 'spinach', cost: 4.10, img: spinach, quantity: 0 },
      { name: 'lemon', cost: 0.80, img: lemon, quantity: 0 },
      { name: 'mango', cost: 2.00, img: mango, quantity: 0 },
      { name: 'avocado', cost: 0.25, img: avocado, quantity: 0 },
    ]
    setProducts(inventory)
  }, [])

  const getItem = (product) => {
    const itemDetails = products.find(p => p.name === product.name)
    setItem(itemDetails)
  }

  const displayItem = (product) => {
    getItem(product)
    setShowCard(true)
  }

  
  return (
    <>
      {showCard 
        ? <ItemCard item={item} setShowCard={setShowCard}/>
        
        : <div className='shop'>
            <Nav />
            <h1>Local Produce</h1>
            <div className="items">
              {products.map(p => (
                <div 
                  key={uniqid()} 
                  className='item'
                > 
                  <p className='item-title'>{p.name}</p>
                  <img 
                    id='product-image' 
                    src={p.img} 
                    alt="food" 
                    onClick={() => displayItem(p)}
                  />
                  <div className='item-handler'>
                    <p>${p.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      }
    </>
  )
}

export default Shop