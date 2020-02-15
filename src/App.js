import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';

function App() {


  return (
    <div className="App">
      <Nav />
      <div className="Intro">
        <div className="Search"></div>
      </div>
      <div className="Cards">
        
        {/* {data.map(item => {
          return <Card location={item.location} price={item.price} post_content={item.seller_name} date={item.date}
          full_link={item.full_link} img="https://source.unsplash.com/random" />
          })} */}
        <Card />
        <Card />
        <Card />
      </div>
        
    </div>
  );
}

export default App;
