
import React, { useState, useEffect} from 'react';
export default function DayTime(props){
    const [val, setVal] = useState(0);
    return(
        <div id="daytime">
            <input type="datetime-local" id={props.id}/>
        </div>
    )  
}