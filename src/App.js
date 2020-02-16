import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';
import data from './data/data.json';

const particleOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 60
      }
    },
    size: {
      value: 8
    }
  }
}

function App() {
  return (
    <div className="App">

        <Nav />

        <Particles params={particleOptions} style={{backgroundColor: "navy", position: "absolute", width: '100%', height: "10px"}}/>

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
