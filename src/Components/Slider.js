import React, { useState, useEffect} from 'react';
export default function Slider(props){
    useEffect(() => {
        document.getElementById('textInput').value=document.getElementById("slide").value; 
        });
    const [val, setVal] = useState(0);
    return(
        <div id="slider">
            <input id="slide" type="range" min="0" max="24" class="slider" onChange={handleChange}/>
            <input type="text" id={"textInput"} value= {val}/>
        </div>
    )
}
function handleChange(event) {
    document.getElementById('textInput').value=event.target.value;
  }