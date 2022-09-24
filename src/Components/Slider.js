import React, { useState, useEffect} from 'react';
export default function Slider(props){
    const [val, setVal] = useState(0);
    props.calculator.setMethod(props.id,0);
    const handleChange =(e) => {
        props.calculator.setMethod(props.id,e.value);
        props.setPercentage({
            calculator: props.calculator
        })
    }
    return(
        <div id="slider">
            <input id="slide" type="range" min={props.min} max={props.max} class="slider" onChange={handleChange}/>
            <input type="text" id={"textInput"} value= {props.calculator.getMethod(props.id)}/>
        </div>
    )
}