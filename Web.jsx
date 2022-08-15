import React from "react";

function Web(props)
{
    console.log(props)
    return(
    <>
    <div className="cardmove">   
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://i.pinimg.com/736x/cf/57/c6/cf57c63fa96bae2113ae0fb969e8a8a7.jpg" alt="Demon Slayer"/>
            <div className="card-body text-center">
                <h5 className="card-title">Demon Slayer</h5>
                <p className="card-text">One of the famous anime with 60 FPS.</p>
                <a href="https://animixplay.to/anime/38000/Kimetsu_no_Yaiba" className="btn btn-primary ">Watch</a>
            </div>
        </div>
    </div>,
    </>)
}
export default Web;