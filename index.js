import React from "react";
import ReactDOM from "react-dom";
import "./Web.css";
import Navbar from "./Navbar";
// import Web from "./Web";
// import Greet from "./Greet";

function Web(props)
{
  console.log(props)
    return(
    <>
    <div className="cardmove">   
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.imgsrc}/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary ">Watch</a>
            </div>
        </div>
    </div>,

    </>)
}

ReactDOM.render(
  <>
  <Navbar/>
  <Web
    imgsrc="https://i.pinimg.com/736x/cf/57/c6/cf57c63fa96bae2113ae0fb969e8a8a7.jpg"
    title="Demon Slayer"
    description="One of the famous anime with 60 FPS."
    link="https://animixplay.to/anime/38000/Kimetsu_no_Yaiba"
  />
  <Web/>
  <Web/>
  </>,
  document.getElementById("root")
) 