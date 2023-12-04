import React from 'react'
import "./cart.css";
const Cart = () => {
  return (
   
        <div className="cart">
      <h2 className="cartheading">Cart</h2>
      <div className="pcart">
        <img src="/images/logo.png" alt="" />
        <div className="title">
          <span>Best shoes</span>
          <span>Best shoes under 199</span>
        </div>
        <span>Price: $12</span>
        <span className='delete'>Delete</span>
        <select name="" id="" className='quantity'>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
        </select>
      </div>
    </div>
  )
}

export default Cart