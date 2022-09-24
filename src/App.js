import logo from './logo.svg';
import './App.css';
import Calculator from './models/Calculator'
import Page from './models/Page'
import { useState } from "react";
import Landing from './Components/Landing'
import QuestionPage from "./Components/QuestionPage"
import PromptPage from "./Components/PromptPage"
import YesNo from "./Components/YesNo"

function App() {

  const [percentage, setPercentage] = useState({
    calculator: new Calculator(),
    page: new Page()
  })
  return (
    <div className="App">
      <Landing percentage={percentage} setPercentage={setPercentage}/>
      <QuestionPage percentage={percentage} setPercentage ={setPercentage}/>
      <PromptPage percentage={percentage} setPercentage = {setPercentage}/>
      <YesNo percentage={percentage} setPercentage = {setPercentage}/>

      {/* Here should be the login */}
      {/* Props: model */}

      {/* Sliders should be here */}
      {/* Props: model, slider should */}


    </div>
  );
}

export default App;
