import React from 'react';
import './Nav.css';
import logo from '../../static/logo.png';

function Nav() {
  return (
    <div className="Nav">
        <a><img className="logo" src={logo}></img></a>
        <a><p>Home</p></a>
        <a><p>Sublets</p></a>
    </div>
  );
}

export default Nav;
