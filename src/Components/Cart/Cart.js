import React from "react";
import "./Cart.css";

const Cart = ({ cart, handelRemoveFromCart }) => {
  
  return (
    <div>
      <h1>Selected Item : {cart.length}</h1>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handelRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
