import React from "react";
import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h1>Special</h1>
      <p>Gift: {house}</p>
      <button onClick={() => setHouse(house + 1)}> Button-2 Buy a new house</button>
    </div>
  );
};

export default Special;
