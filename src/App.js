import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';
import data from './data/data.json';

const particleOptions = {
                  particles: {
                    number: {
                      value: 900,
                      density: {
                        enable: true,
                        value_area: 1000
                      }
                    }
                  }
                }

function App() {
  return (
    <div className="App">

        <Nav />
        <div className="Intro">
            
            <Particles params={particleOptions} width="100%" height="100%"/>


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
