import React from 'react'

const Order = () => {
  return (
    <div className="cart">
      <h2 className="cartheading">Orders</h2>
      <div className="pcart">
        <img src="/images/logo.png" alt="" />
        <div className="title">
          <span>Best shoes</span>
          <span>Best shoes under 199</span>
        </div>
        <span>Price: $12</span>
       <span>status</span>
      </div>
    </div>
  )
}

export default Order