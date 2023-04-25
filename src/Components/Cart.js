import React from 'react'
import uniqid from 'uniqid'

const Cart = ( { cartItems, setCartItems } ) => {

  const adjustCountOfItem = (operator, item) => {
    switch(operator) {
      case 'add':
        item.quantity++
        break
      case 'subtract':
        item.quantity--
        break
      default :
        return
    }

    let adjustedItem = cartItems.find(product => product.name === item.name)
    let newCartItems = cartItems.filter(product => product.name !== item.name)
    setCartItems(() => {
      if (adjustedItem.quantity === 0) return [...newCartItems]
      return [...newCartItems, adjustedItem]
    })
  }

  const showTwoDecimals = (num) => {
    let cleanNum = Math.floor(num * 100) / 100
    let strNum = cleanNum.toString();
    let result;
    if (strNum.length - strNum.indexOf('.') === 2) {
      result = strNum + '0'
    } else {
      result = strNum
    }
    return result
  }

  const getTotal = () => {
    let result = showTwoDecimals(cartItems.reduce((total, item) => {
      return total + (parseFloat(item.quantity) * parseFloat(item.cost))
    }, 0))
    return result
  }

  const getTaxes = () => {
    let result = cartItems.reduce((total, item ) => {
      return total + item.quantity * item.cost
    }, 0)
    return showTwoDecimals(result * 0.13)
  }


  return (
    <div className='cart-page'>
      {cartItems  && cartItems.length > 0 
        ?
        <>
          <h1>Your Cart</h1>
          <div className="cart-items-container">
            {cartItems
              .sort((a, b) => a.name > b.name ? 1 : -1)
              .map(item => {
              return (
                <div className='cart-item' key={uniqid()}>
                  <img id='mini-img' src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Count: {item.quantity}</p>
                  <div className='cart-item-count-buttons'>
                    <button onClick={() => adjustCountOfItem('add', item)}>+</button>
                    <button onClick={() => adjustCountOfItem('subtract', item)}>-</button>
                  </div>
                  <p>Total : {showTwoDecimals(item.quantity * item.cost) }</p>
                </div>
              )
            })}
            <div className="totals">
              <p>Shipping :</p>
              <p>FREE</p>
              <p>Subtotal:</p>
              <p>${showTwoDecimals(getTotal() - getTaxes())}</p>
              <p>Taxes {`(13% HST)`} : </p>
              <p>{`${getTaxes()}`}</p>
              <p>Total Amount : </p>
              <p>${getTotal()}</p>
            </div>
            <div className="pay-button-container">
              <button className='pay-button'>PAY</button>
            </div>
           
          </div> 
        </>
        : 
        <h1>Your cart is empty</h1>}
    </div>
  )
}

export default Cart