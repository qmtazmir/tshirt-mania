import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house }) => {
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h1>Its my self</h1>
      <p>House; {house}</p>
      <Special ></Special>
    </div>
  );
};

export default MySelf;
