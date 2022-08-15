import React from "react";

function Greet()
{
    var time=new Date();
    time=time.getHours();
    let greetings="";
    var name="Jamun";
    let styling={};

    if(time>=1 && time<12)
    {
    greetings="Good morning!";
    styling.color='green';  
    }
    else if(time>=12 && time<=16)
    {
    greetings="Good Afternoon!";
    styling.color='Yellow';  
    }
    else if(time>=17 && time<=21)
    {
    greetings="Good Evening!";
    styling.color='blue';  
    }
    else
    {
    greetings="good night butch!";
    styling.color='black';  
    }
    return(
        <>
            <h1 ClassNameNameName="whore">Hi {name} Sir, <span style={styling}>{greetings}</span></h1>
        </>        
    );
}
export default Greet;