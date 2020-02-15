import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <div className="Search"></div>
      </div>
      <div className="Cards">
        <Card />
        <Card />
        <Card />
      </div>
        
    </div>
  );
}

export default App;
