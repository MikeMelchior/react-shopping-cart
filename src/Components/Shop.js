import React  from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'



function Shop( { products, setProduct } ) {


  return (
    <>
      <div className='shop'>
        <div className="items">
          
          {products.map(product => (
            <div 
              key={uniqid()} 
              className='item'
            > 
              <Link onClick={() => {setProduct(product)}} to={`/shop/${product.name}`}>
                <p className='item-title'>{product.name}</p>
                <img 
                  id='product-image' 
                  src={product.img} 
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