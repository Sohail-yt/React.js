import React from "react";

let name="jhurgut";
let age=45;

function Images()
{
    return(
           <p style={{'color':'red'}}>my name is {name}</p>
    )
}
function rod()
{
    return(
        <p>I am Rod</p>
    );
}

export default Images;
export {Images,age,rod};