import Button from "./Button"
import Slider from "./Slider"
import "../App.css"

export default function QuestionPage(props){
    return(
        <div id="QuestionPage" className = {props.percentage.page.page==="Questions"? "visible" : "hidden"}>
            <p>How many hours do you want to sleep?</p>
            <Slider id ={"HrSleep"} min={0} max = {24} percentage={props.percentage} setPercentage = {props.setPercentage}/>
            <p>How much would you like to say no?</p>
            <Slider id={"Preference"} min={0} max={100} percentage={props.percentage} setPercentage = {props.setPercentage}/>
            <Button percentage={props.percentage} setPercentage = {props.setPercentage} inText = {"Next Step"} nextPage = {"Prompt"}/>
        </div>
    )
}