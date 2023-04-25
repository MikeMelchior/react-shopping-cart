import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../images/cart.png'

function Nav( { cartItems } ) {
  
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/shop'} >Shop Produce</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact Us</Link>
        </li>
        <li className='push-right'>
          <Link to={'/cart'}>
            <img id='cart' src={cart} alt="cart"/>
            {cartItems && cartItems.length > 0 ? <p className='item-count'>{cartItems.length}</p> : null}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav