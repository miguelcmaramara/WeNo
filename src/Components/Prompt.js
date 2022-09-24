import React, { useState, useEffect} from 'react';
import DayTime from './DayTime';
import Dropdown from './Dropdown';
import Textbox from './Textbox';

export default function Prompt(props){
  const submit = (e)=>{
    if(props.calculator.Question())
      ans = "Yes"
    else
      ans = "NO!!!"
  }
    return(
        <div id="prompt">
          <label>Name of the Event:</label> 
          <Textbox id ="name" calculator ={props.calculator}  setPercentage={props.setPercentage}/>
          <label>Type of Event:</label>
          <Dropdown/>
          <label>Please enter the event start time:</label>
          <DayTime calculator={props.calculator} setPercentage={props.setPercentage} id = "start"/>
          <label>Please enter the event end time:</label>
          <DayTime calculator={props.calculator} setPercentage={props.setPercentage} id = "end"/>
          <button onClick={submit}>Submit</button>

        </div>
    )  
}
