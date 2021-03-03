import React, { useState } from "react";
// import "../styles/Child.css";

const Selection = (props) => {
  const [currBg, setCurrBg] = useState({ background: "" });
  const applyColor = () => {
    props.applyColor(getColor);
  };
  const getColor = (color) => {
    let newColor = color.background;
    setCurrBg({ background: newColor });
  };
  return (
    <>
      <div className="fix-box" style={currBg} onClick={applyColor}>
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
