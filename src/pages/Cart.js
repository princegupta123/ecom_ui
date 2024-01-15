import React from "react";

const Cart = () => {
  return (
    <div className="cart mt-4 mb-4">
      <h3>My Cart</h3>
      <div className="cart-wrapper">
        <div className="header-card">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="item-card">
          <p className="">Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="cart-button">
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className="cart-checkout mt-4">
          <div className="left-cart">
            <input placeholder="Enter Coupan Code" />
            <button>Apply Coupan</button>
          </div>
          <div className="right-cart">
            <div className="mb-2">
              <h4>Cart Total</h4>
            </div>
            <div>
              <p>Subtotal:</p>
              <p>$45</p>
            </div>
            
            <div>
              <p>Shipping:</p>
              <p>$45</p>
            </div>
            <div>
              <p>Total</p>
              <p>$45</p>
            </div>
            <div className="mb-3">
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
