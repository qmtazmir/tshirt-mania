import React from "react";
import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [house, setHouse] = useContext(RingContext);
  const handleHouseIncrease = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <div>
      <h1>This is unty</h1>
      <p>House : {house}</p>
      <button onClick={handleHouseIncrease}>Button-3 Buy now a house</button>
    </div>
  );
};

export default Aunty;
