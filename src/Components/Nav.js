import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

function Nav() {
  
  


  return (
    <div className='nav'>
      <div className='link'><Link to={'/'}>Home</Link></div>
      <div className='link'><Link to={'/shop'}>Shop Produce</Link></div>
      <div className='link'><Link to={'/contact'}>Contact Us</Link></div>
    </div>
  )
}

export default Nav