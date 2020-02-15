import React from 'react';
import './Card.css';

function Card(prop) {
  return (
    <div className="Card">   
        <a className="link" href="/">
            <p className="location">Location</p>
            <p className="price">$700/month</p>
            <p className="seller_name">Jenny Springs</p>
            <p className="date">February 5th, 2020</p>
        </a>

        {/* <p className="location">{location}</p>
        <p className="price">{price}</p>
        <p className="seller_name">{seller}</p>
        <p className="date">{date}</p>
        <a className="link" href="{link}">asjdn</a> */}
    </div>
  );
}

export default Card;
