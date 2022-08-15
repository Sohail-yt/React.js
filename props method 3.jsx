import React from "react";
import ReactDOM from "react-dom";
import "./Web.css";
import Navbar from "./Navbar";
import AnimeSdata from "./AnimeSdata";
import AnimeCards from "./AnimeCards";
// import Web from "./Web";
// import Greet from "./Greet";


function mapping(value,index,){
  return(
    <AnimeCards
    imgsrc={value.imgsrc}
    title={value.title}
    description={value.description}
    link={value.link}
  />
  )
}

ReactDOM.render(
  <>
  <Navbar/>
  {AnimeSdata.map(mapping)}
  </>,
  document.getElementById("root")
) 