import React from "react";
import "./Cart.css";

const Cart = ({ cart, handelRemoveFromCart }) => {
  // Conditional rendering options
  // 1. Element variable
  // 2. Ternary operator condition ? true: false
  // 3.&& Operator / Shorthand
  // 4.  Or

  let command;
  if (cart.length === 0) {
    command = <p>Please Add at least one item</p>;
  } else if (cart.length === 1) {
    command = <p>Please Add more..</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding items</small>
      </p>
    );
  }
  return (
    <div>
      <h1>Selected Item : {cart.length}</h1>

      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handelRemoveFromCart(tShirt)}> X</button>
        </p>
      ))}
      {cart.length === 0 || <p className="orange">YAY ! You are bying</p>}
      {cart.length === 3 && (
        <div className="orange">
          <h1>Trigonal</h1>
          <p> Ami akhon kikortam</p>
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>Keep adding </p> : <button>Remove ALL</button>}
      {cart.length > 4 && <button className="orange">Review Your Order</button>}
    </div>
  );
};

export default Cart;
