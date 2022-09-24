import React, { useState, useEffect} from 'react';
export default function Textbox(props){
    const [val, setVal] = useState(0);
    return(
        <div id="textbox">
            <input type ="text" id = "textAns"/>
        </div>
    )  
}