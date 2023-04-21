import React, { useEffect, useState } from 'react'

function ItemCard( { item, setShowCard } ) {

  

  return (
    <div className='item-card'>
      <p onClick={() => setShowCard(false)}> x </p>
      <img src={item.img} alt="" />
    </div>
  )
}

export default ItemCard