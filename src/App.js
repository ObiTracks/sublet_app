import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';
import data from './data/data.json';

const particleOptions = {
                  particles: {
                    number: {
                      value: 150,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    }
                  }
                // polygon: {
                //     enable: true,
                //     type: 'inside',
                //     move: {
                //         radius: 10
                //     },
                //     draw: {
                //       enable = True
                //     }
                //     url: 'path/to/svg.svg'
                }

function App() {
  return (
    <div className="App">

        <Nav />

        <div className="Intro">
            
            <Particles params={particleOptions} />

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
