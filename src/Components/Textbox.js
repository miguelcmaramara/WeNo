import React, { useState, useEffect} from 'react';
export default function Textbox(props){
    const [val, setVal] = useState(0);
    const handleChange =(e) => {
        props.calculator.setMethod(e.id,e.value)
    }
        return(
        <div id="textbox">
            <input type ="text" id = "props.id" onChange={handleChange}/>
        </div>
    )  
}