import React, { useState } from "react";
import useTShirts from "../../Hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handelAddToCart = (selectedItem) => {
    const exists = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Item already added");
    }
  };

  const handelRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id);
    setCart(rest);
  };
  return (
    <div className="home-container">
      <div className="shirt-container">
        {tShirts.map((tShirt) => (
          <TShirt key={tShirt._id} tShirt={tShirt} handelAddToCart={handelAddToCart}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
