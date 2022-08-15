import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Greet from './Greet';
import Images from './Images';
import {List,phodrike, Jhurgut} from './List';
// import * as jamun from './List';

ReactDOM.render(
  <>
  <ul>
    <li><Greet/></li>
    <li><Images/></li>
    <li>{List}</li>
    <li>{Jhurgut()}</li>
    <li>{phodrike()}</li>
  </ul>
  </>,
document.getElementById("root"));
  