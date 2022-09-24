import logo from './logo.svg';
import './App.css';
import Calculator from './models/Calculator'
import { useState } from "react";
import Landing from './componenets/Landing'

function App() {

  const [percentage, setPercentage] = useState({
    calculator: new Calculator()
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

      <Landing/>
      {/* Here should be the login */}
      {/* Props: model */}

      {/* Sliders should be here */}
      {/* Props: model, slider should */}


    </div>
  );
}

export default App;
