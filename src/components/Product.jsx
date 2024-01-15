import React from 'react'
import { FcLike } from "react-icons/fc";
const Product = () => {
  return (
    <div className='product'>
      <img src="/images/2.jpg" alt="" className='product-img' />
      <span className="like-icon" role="img" aria-label="Like">
        ❤️
      </span>
      <h6 className='title'>Best Shoes</h6>
      <div className='price'>
        <p className='original-price'>$100</p>
        <p className='selling-price'>$50</p>
      </div>
      <div className='review'>
        <p className='star'>*****</p>
        <p className='review-count'>(5)</p>
      </div>
      <div className='product-button'>
        <button className='add-to-cart'>Add To Cart</button>
        <button className='buy'> Buy </button>
      </div>
    </div>
  )
}

export default Product