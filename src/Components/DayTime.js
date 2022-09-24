
import React, { useState, useEffect} from 'react';
export default function DayTime(props){
    const handleChange =(e) => {
        props.calculator.setMethod(e.id,e.value)
        props.setPercentage({
            calculator: props.calculator
        })
    }
    return(
        <div id="daytime">
            <input type="datetime-local" id={props.id} onChange={handleChange}/>
        </div>
    )  
}