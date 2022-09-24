import React, { useState, useEffect} from 'react';
export default function Dropdown(props){
    const [val, setVal] = useState(0);
    return(
        <div id="dropdown">
            <select name="list" id="list">
                <option value="one">Choice 1</option>
                <option value="two">Choice 2</option>
            </select>
        </div>
    )  
}