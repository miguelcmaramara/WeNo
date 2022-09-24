import logo from './logo.svg';
import './App.css';
import Calculator from './models/Calculator'
import Page from './models/Page'
import { useState } from "react";
import Landing from './Components/Landing'
import Slider from './Components/Slider'
import Prompt from './Components/Prompt'

function App() {

  const [percentage, setPercentage] = useState({
    calculator: new Calculator(),
    page: new Page()
  })
  return (
    <div className="App">
      <Landing page ={percentage.page} setPercentage={setPercentage}/>
      <Prompt calculator={percentage.calculator} setPercentage={setPercentage}/>
      <Slider min={0} max={24} id={"temp"} calculator = {percentage.calculator} setPercentage={setPercentage}/>

      {/* Here should be the login */}
      {/* Props: model */}

      {/* Sliders should be here */}
      {/* Props: model, slider should */}


    </div>
  );
}

export default App;
