import React from "react";
import { createContext } from "react";
import { useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

/**context api
 *1. Call creatContext with a defult value
 *2.set a variable of the context with uppercase
 *3. Make sure you export the context to use it in other places
 4.Warp you child content using RingContext.Provider
 5. Provide a value
 6. to consume the context from child component
 7. useContext hook and you will you need to pass the contextName
 8. Make sure you take notes...
*
* **/
export const RingContext = createContext("diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Dimond Ring"; /*Getting Item*/

  const handelBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h1>Grandpa</h1>
        <button onClick={handelBuyAHouse} style={{ backgroundColor: "bisque" }}> Button-1
          Buy A House
        </button>

        <p>House: {house}</p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
