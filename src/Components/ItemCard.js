import React, { useRef, useState } from "react"

function ItemCard( { product, cartItems, setCartItems } ) {
  const [cost, setCost] = useState(product.cost)
  const [item, setItem] = useState({...product})

  const inputRef = useRef()

  const addToCart = () => {
    setCartItems(() => {
      return [...cartItems, item]
    })
  }

  return (
    <div className="item-card-container">
      <div className="item-card">
        <div className="left">
          <img id="product" src={product.img} alt={product.name} />
        </div>
        <div className="right">
          <h1>{product.name}</h1>
          <p>CAD ${cost}</p>
          <div>
            <button>-</button>
            <input 
              ref={inputRef} 
              onChange={() => {
                setCost(inputRef.current.value * product.cost)
                setItem((prev) => {
                  return {...prev, quantity: inputRef.current.value}
                })
              }}
              type="number" 
              max={100} 
              min={0}
              defaultValue={product.quantity}/>
            <button>+</button>
          </div>
          <button onClick={addToCart}>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard