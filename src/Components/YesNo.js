import Button from "./Button"
import "../App.css"

export default function YesNo(props){
    return(
        <div id="YesNo" className = {props.percentage.page.page==="YesNo"? "visible" : "hidden"}>
            <Button percentage= {props.percentage} setPercentage = {props.setPercentage} inText = {"Enter New Event"} nextPage = {"Prompt"}/>
        </div>
    )
}