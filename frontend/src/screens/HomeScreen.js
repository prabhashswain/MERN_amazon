import React from 'react'
import data from '../data';

const HomeScreen = () => {
  return (
    <>
    <h1>Featured Products</h1>
      <div className='products'>
        {
          data.products.map(product=>(
            <div className='product' key={product.slug}>
             <a href={`/products/${product.slug}`}>
             <img src={product.image} alt={product.name} />
             </a>
              <div className='product-info'>
              <a href={`/products/${product.slug}`}>
              <p>{product.name}</p>
              </a>
              <p><strong>$</strong> {product.price}</p>
              <button>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default HomeScreen