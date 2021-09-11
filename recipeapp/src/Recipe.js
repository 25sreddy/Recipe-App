import React from "react";
import "./recipe.css";
const Recipe = (props) => {
  return (
    <div className="container">
      <div className="text">
        <h1 className="title">{props.title}</h1>
        <h3 className="time">{props.calories} Calories</h3>
        <h3 className="time">{props.meal} </h3>
      </div>
      <ol>
        {props.ingrid.map((item) => (
          <li>{item.text}</li>
        ))}
      </ol>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Recipe;
