import React from "react";
import "./TShirt.css";

const TShirt = ({ handelAddToCart, tShirt }) => {
  const { name, picture, price, gender } = tShirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <h5>Price: ${price}</h5>
      <p>{gender}</p>
      <button onClick={() => handelAddToCart(tShirt)} className="cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default TShirt;
