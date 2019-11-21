import React from "react";
import logo from './logo.svg';
import HelloHeader from './components/HelloHeader';
import Instructions from './components/Instructions';
import Game from './components/Game';
import './App.css';

function App() {
  return (

    <div className="App">
      <HelloHeader/>
      <Instructions/>
      <Game/>
    </div>
  );
}
export default App;



