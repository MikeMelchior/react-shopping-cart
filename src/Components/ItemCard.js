import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import ErrorMessage from './ErrorMessage'

function ItemCard( { product, cartItems, setCartItems } ) {
  const [cost, setCost] = useState(product.cost)
  const [item, setItem] = useState({...product})

  const inputRef = useRef()
  const buttonRef = useRef()

  const animateButton = () => {
    buttonRef.current.className = 'animate'
  }

  const addToCart = () => {

    if (inputRef.current.value < 1 || inputRef.current.value % 1 !== 0) return;

    //cancel any in progress animation
    buttonRef.current.className = '';

    // check if item already exists in cart
    const itemInCart = () => {
      for (let product in cartItems) {
        if (cartItems[product].name === item.name) {
          return true 
        }
      }
      return false
    }

    // update quantity of item if already in cart
    let updatedItem;
    if (itemInCart()) {
      updatedItem = cartItems.find(product => product.name === item.name)
      let updatedQuantity = parseFloat(updatedItem.quantity) + parseFloat(inputRef.current.value)
      updatedItem = {...updatedItem, quantity: updatedQuantity}
    } else {
      updatedItem = {...item, quantity: inputRef.current.value}
    }
    
    // update quantity of item in cart
    setCartItems(() => {
      let tempItems = cartItems.filter(i => i.name !== updatedItem.name)
      return [...tempItems, updatedItem]
    })

    //timeout band aid to let class be removed before re adding
    setTimeout(() => {
      animateButton()
    }, 0)
    
  }

  // have price show a maximum of 2 decimals
  const twoDecimalCost = () => {
    let result = inputRef.current.value * product.cost
    let twoDecimalResult = Math.floor(result * 100) / 100
    return twoDecimalResult
  }

  return (
    <>
    { product.name === undefined

    ? 
      <ErrorMessage />
    : 
        <div className="item-card-container">
          <h3><Link to={'/shop'}>{'<< Back to Shop'}</Link></h3>
          <div className="item-card">
            <div className="left">
              <img id="product" src={product.img} alt={product.name} />
            </div>
            <div className="right">
              <h1>{product.name}</h1>
              <p>CAD ${cost}</p>
              <div className='quantity'>
                <p>Quantity: </p>
                <input 
                  ref={inputRef} 
                  onChange={() => {
                    setCost(twoDecimalCost)
                    setItem((prev) => {
                      return {...prev, quantity: inputRef.current.value}
                    })
                  }}
                  type="number" 
                  max={100} 
                  min={0}
                  defaultValue={1}/>
              </div>
              <button id="add-button" ref={buttonRef} onClick={addToCart}>ADD TO CART</button>
              <Link to={'/cart'}><button id="checkout">CHECKOUT</button></Link>
            </div>
          </div>
        </div>
      
      }
    </>
  )
}

export default ItemCard