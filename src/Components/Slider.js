import React, { useState, useEffect} from 'react';
export default function Slider(props){
    const [val, setVal] = useState(0);
    if(props.percentage.calculator.getMethod(props.id)==undefined)
        props.percentage.calculator.setMethod(props.id,0);
    const handleChange =(e) => {
        props.percentage.calculator.setMethod(props.id,e.target.value);
        console.log(e.target.value);
        console.log("_________");
        props.setPercentage({
            calculator: props.percentage.calculator,
            page: props.percentage.page
        })
        console.log(props.percentage.calculator.getMethod(props.id));
    }
    return(
        <div id="slider">
            <input id="slide" type="range" min={props.min} max={props.max} onChange={handleChange}/>
            <input type="text" id={"textInput"} value= {props.percentage.calculator.getMethod(props.id)} onChange={handleChange}/>
        </div>
    )
}