import React, { Component } from "react";
import logo from './logo.svg';
import Instructions from './components/Instructions';
import Game from './components/Game';
import './App.css';

class App extends Component {

render() {
  return (

    <div className="App">
      <Instructions/>
      <Game/>
    </div>
    
  );
  
}
}
export default App;



