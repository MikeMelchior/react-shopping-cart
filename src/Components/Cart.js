import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'
// import key from '../ing'

function Cart() {
  const [totalCost, setTotalCost] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  


  return (
    <div className='cart'>
      <div className='link'><Link to={'/'}>Home</Link></div>
    </div>
  )
}

export default Cart