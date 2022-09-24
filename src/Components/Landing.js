import "./css/Landing.css"
import Button from "./Button"
import "../App.css"

export default function Landing(props){
    return(
        <div id="Landing" className = {props.percentage.page.page==="Landing"? "visible" : "hidden"}>
            <div className="background"></div>
            <div className="text before">
                <div className="center-text">
                    <h1 className="title">We<span className="green">No</span></h1>
                    <h3 className="caption">Help us help you</h3>
                </div>
            </div>
            <div className="text after">
                <div className="center-text">
                    <h1 className="title">WeNo</h1>
                    <h3 className="caption">Help us help you</h3>
                    <Button percentage= {props.percentage} setPercentage = {props.setPercentage} inText = {"Start"} nextPage = {"Questions"}/>
                </div>
            </div>

        </div>
    )
}