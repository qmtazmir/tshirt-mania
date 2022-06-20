import React from "react";
import Brother from "../Brother/Brother";
import Mother from "../Mother/Mother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div style={{ backgroundColor: "bisque" }}>
      <h1>MY Father</h1>
      <p>House: {house}</p>
      <section style={{ display: "flex" }}>
        <Mother house={house}></Mother>
        <MySelf house={house}></MySelf>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </section>
    </div>
  );
};

export default Father;
