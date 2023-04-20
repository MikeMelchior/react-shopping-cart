import React, { useEffect, useId, useState } from 'react'
import Cart from './Cart'
import uniqid from 'uniqid'

function Shop() {
  const [products, setProducts] = useState([])
  

  useEffect(() => {
    const inventory = [
      { name: 'apple', cost: 0.5 },
      { name: 'cucumber', cost: 2 },
      { name: 'banana', cost: 1.25 },
      { name: 'peppers', cost: 3.8 },
      { name: 'carrot', cost: 1 },
      { name: 'broccoli', cost: 1.80 },
      { name: 'spinach', cost: 4.1 },
      { name: 'lemon', cost: 0.8 },
      { name: 'mango', cost: 2 },
      { name: 'avocado', cost: 0.25 },
    ]
    setProducts(inventory)
  }, [])

  
  return (
    <div className='shop'>
      <Cart />
      <h1>Produce Store</h1>
      {products.map(p => {
        return <p key={uniqid()}>{p.name}: {p.cost}</p>
      })}
    </div>
  )
}

export default Shop