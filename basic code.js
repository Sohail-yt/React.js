import React from "react";
import ReactDOM from "react-dom";
import '.\index.css';
import Greet from "./Greet";



var name="khan";
var age=20;
ReactDOM.render(
  <>
    <h1>{`i am ${name}`}</h1>
    <h1>{`and age is ${age}`}</h1>
    <Greet/>,
  </>
  ,document.getElementById("root")
);