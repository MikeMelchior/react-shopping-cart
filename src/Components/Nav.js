import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'
import cart from '../images/cart.png'

function Nav() {
  
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
        <li>
          <Link to={'/cart'}>
            <img id='cart' src={cart} alt="cart" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav