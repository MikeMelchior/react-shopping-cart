import React from 'react'

const Cart = ( { cartItems } ) => {

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map(item => {
        return (
          <div>
            <h3>{item.name}</h3>
            <p>{item.quantity}</p>
            <p>{item.cost}</p>
            <p>total : {item.quantity * item.cost}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Cart