import React, { useState, useEffect} from 'react';
import DayTime from './DayTime';
import Dropdown from './Dropdown';
import Textbox from './Textbox';

export default function Prompt(props){
    return(
        <div id="prompt">
          <label>Name of the Event:</label> 
          <Textbox id ="name" percentage ={props.percentage}  setPercentage={props.setPercentage}/>
          <label>Type of Event:</label>
          <Dropdown/>
          <label>Please enter the event start time:</label>
          <DayTime percentage={props.percentage} setPercentage={props.setPercentage} id = "start" offset ={0}/>
          <label>Please enter the event end time:</label>
          <DayTime percentage={props.percentage} setPercentage={props.setPercentage} id = "end" offset = {1}/>
        </div>
    )  
}
