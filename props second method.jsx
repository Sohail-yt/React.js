import React from "react";
import ReactDOM from "react-dom";
import "./Web.css";
import Navbar from "./Navbar";
import AnimeSdata from "./AnimeSdata";
// import Web from "./Web";
// import Greet from "./Greet";

function Web(props)
{
  console.log(props)
    return(
    <>
    <div className="cardmove">   
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.imgsrc} alt=""/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} target="_blank" className="btn btn-primary ">Watch</a>
            </div>
        </div>
    </div>,

    </>)
}

ReactDOM.render(
  <>
  <Navbar/>
  <Web
    imgsrc={AnimeSdata[0].imgsrc}
    title={AnimeSdata[0].title}
    description={AnimeSdata[0].description}
    link={AnimeSdata[0].link}
  />
  <Web
    imgsrc={AnimeSdata[1].imgsrc}
    title={AnimeSdata[1].title}
    description={AnimeSdata[1].description}
    link={AnimeSdata[1].link}
  />
  <Web
    imgsrc={AnimeSdata[2].imgsrc}
    title={AnimeSdata[2].title}
    description={AnimeSdata[2].description}
    link={AnimeSdata[2].link}
  />
  </>,
  document.getElementById("root")
) 
