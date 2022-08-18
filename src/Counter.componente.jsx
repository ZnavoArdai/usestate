import { useState } from "react";


const Counter=({num})=>{
const [counter,setCounter]=useState(num)
// const [boom,setBoom]=useState(boom)
    const counterUp=()=>{

        setCounter(counter+1)

        if(counter%3==0){

document.getElementById("display").innerHTML+="boom <br>";
        }
    }
    const counterDown=()=>{

        setCounter(counter-1)
    }

    const changeCounterToFive=()=>{
        setCounter(5)
    }
    
    const rest=()=>{
        setCounter(0)
    }
return(

    <>
<h1>{counter}</h1>
<div id="display"></div>
<button onClick={counterUp}>up</button>
<button onClick={counterDown}>down </button>
<button onClick={rest}>rest</button>

    </> 
)
 
}


export default Counter;