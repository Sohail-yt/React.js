import React from "react";

function AnimeCards(props){
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
      </div>
      </>)
  }

export default AnimeCards;