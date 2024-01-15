import React from "react";
import CustomComponent from "../components/CustomComponent";

const Checkout = () => {
  return (
    <div className="main mt-4">
      <h4 className="text-center">Checkout</h4>
      <div className="checkout">
        <div className="checkout-left">
          <h5>Address Details</h5>
          <input placeholder="Full Name" />
          <input placeholder="Company Name" />
          <input placeholder="Street Address" />
          <input placeholder="Apartment, Floor No." />
          <input placeholder="Town, City" />
          <input placeholder="Phone Number" />
          <button>Save Address</button>
        </div>
        <div className="checkout-right">
            <h4>Billing Details</h4>
          <div className="d-flex align-item-center justify-content-between product-checkout">
            <div className="d-flex">
              <img src="/images/shop-icon.png" width="40px" height="40px" />
              <p className="mx-2 mt-2">name</p>
            </div>
            <div>$50</div>
          </div>
          <CustomComponent name="Subtotal" value="$50" />
          <CustomComponent name="Shipping" value="free" />
          <CustomComponent name="Total" value="$50" />

       
            <label class="radio-container">
              <input type="radio" name="options" /> Online
              <span class="radio-checkmark"></span>
            </label>

          <label class="radio-container">
            <input type="radio" name="options" /> Cash On Delievery
            <span class="radio-checkmark"></span>
          </label>
          <button className="checkout-btn">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
