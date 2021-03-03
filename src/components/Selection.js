import React, { Component } from 'react';
import "../styles/Child.css"

const Selection=(props)=>{
    const [currBg, setCurrBg] = React.useState({ background: "" });
  const applyColor = () => {                  // here applyColor is a function defined in Selection.js
                                              // and props.applyColor is the function passed to it as props
    props.applyColor(getColor);                // we are basically passing getColor function to our props:- applyColor() 
  };                                            // which act as updateSelectionStyle and nextBackground would be set to color 
                                               // we just defined here what the function would do
  const getColor = (color) => {
    let newColor = color.background;
    setCurrBg({ background: newColor });
  };
   

    return ( 
      <>
    <div className="fix-box" style={currBg} onClick={applyColor} >
        <h2 className="subheading" >{props.heading}</h2>
    </div> 
    </>
)
    }

export default Selection;