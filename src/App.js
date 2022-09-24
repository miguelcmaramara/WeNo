import logo from './logo.svg';
import './App.css';
import Calculator from './models/Calculator'
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
