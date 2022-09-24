import React, { useState, useEffect} from 'react';
import DayTime from './DayTime';
import Dropdown from './Dropdown';
import Textbox from './Textbox';

export default function Prompt(props){
    const [val, setVal] = useState(0);
    return(
        <div id="prompt">
          <label>Name of the Event:</label> 
          <Textbox/>
          <label>Type of Event:</label>
          <Dropdown/>
          <label>Please enter the event start time:</label>
          <DayTime id = "start"/>
          <label>Please enter the event end time:</label>
          <DayTime id = "end"/>
        </div>
    )  
}
