import React  from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'



function Shop( { products } ) {



  return (
    <>
      <div className='shop'>
        <h1>Local Produce</h1>
        <div className="items">
          {products.map(p => (
            <div 
              key={uniqid()} 
              className='item'
            > 
              <Link to={`/shop/${p.name}`}>
                <p className='item-title'>{p.name}</p>
                <img 
                  id='product-image' 
                  src={p.img} 
                  alt="food"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Shop