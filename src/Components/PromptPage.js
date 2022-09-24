import Button from "./Button"
import Prompt from "./Prompt"
import "../App.css"

export default function PromptPage(props){
    return(
        <div id="PromptPage" className = {props.percentage.page.page==="Prompt"? "visible" : "hidden"}>
            <Prompt percentage={props.percentage} setPercentage={props.setPercentage}/>
            <Button percentage={props.percentage} setPercentage = {props.setPercentage} inText = {"Submit"} nextPage = {"YesNo"}/>
        </div>
    )
}