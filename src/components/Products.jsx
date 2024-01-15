import React from 'react'
import Product from './Product'
const Products = (props) => {

  return (
    <div className='products-main mt-5'>
      {
        props.type === "Flash Sales" ? <div className='product-header'>
          <p className='product-heading'>{props.type}</p>
          <p className='sale-timer'>03:23:19:56</p>
        </div> : <div className='product-header'>
          <p className='product-heading'>{props.type}</p>
          <p className='view-all'>View All</p>
        </div>
      }
      <div className='products'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      {props.type === "Flash Sales" && <button className='view-all-btn'>View All Products</button>}
    </div>
  )
}

export default Products