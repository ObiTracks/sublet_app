import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';
import data from './data/data.json';

const particleOptions = {
                  particles: {
                    number: {
                      value: 20,
                      density: {
                        enable: true,
                        value_area: 60
                      }
                    },
                    size: {
                      value: 3
                    }
                  }
                }

function App() {
  return (
    <div className="App">

        <Nav />
        <Particles params={particleOptions} style={{backgroundColor: "lightblue", position: "absolute", width: '100%'}}/>

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
