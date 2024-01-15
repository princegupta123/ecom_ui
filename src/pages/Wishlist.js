import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const Wishlist = () => {
  return (
    <div className="wishlist">
        <h2 className="text-center mt-4">My WishList(4)</h2>
    <div className="products mt-4">
      <div className="product">
        <img src="/images/2.jpg" alt="" className="product-img" />
        <span className="like-icon" role="img" aria-label="Like">
          <MdDeleteOutline />
        </span>
        <h6 className="title">Best Shoes</h6>
        <div className="price">
          <p className="original-price">$100</p>
          <p className="selling-price">$50</p>
        </div>
        <div className="review">
          <p className="star">*****</p>
          <p className="review-count">(5)</p>
        </div>
        <div className="product-button">
          <button className="add-to-cart">Add To Cart</button>
          <button className="buy"> Buy </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Wishlist;
