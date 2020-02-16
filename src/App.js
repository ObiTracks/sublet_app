import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="Intro">
        <div className="search">
          <input></input>
        </div>
      </div>

      <div className="Cards">
        {data.map(item => {
          return <Card price={item.price} link={item.URL}/>
        })}
      </div>
        
    </div>
  );
}

export default App;
