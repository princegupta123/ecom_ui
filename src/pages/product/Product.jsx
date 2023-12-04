import React from 'react'
import "./product.css";
const Product = () => {
  return (
    <div className='product'>
      <img src="/images/1.jpg" alt="" className='pImage'/>
      <div className="rightPart">
      <span className='txt1'>best shoes</span>
      <span className='txt'>Description for the product</span>
      <div className="btns">
      <button className='btun'>Add to cart</button>
      <button className='btun1'>Buy now</button>
      </div>
      <span className='like1'>like</span>
      <div className='comment'>
      <input type="text" placeholder='enter your review' className='inputComment'/>
      <button className='btnsub'>submit</button>
      </div>
      </div>
    </div>
  )
}

export default Product