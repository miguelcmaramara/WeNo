
import React, { useState, useEffect} from 'react';
export default function DayTime(props){
    if(time==undefined){
        var time = new Date();
        time.setHours(time.getHours()+props.offset);
        var correctTime = time.toISOString().substring(0,16);
    }
    const handleChange =(e) => {
        props.percentage.calculator.setMethod(props.id,e.target.value)
        props.setPercentage({
            calculator: props.percentage.calculator,
            page:props.percentage.page
        })
    }
    return(
        <div id="daytime">
            <input type="datetime-local" id={props.id} onChange={handleChange} value={props.percentage.calculator.getMethod(props.id)==undefined?correctTime:props.percentage.calculator.getMethod(props.id)}/>
        </div>
    )  
}