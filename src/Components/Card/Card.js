import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">
        <a className="link" href="{props.link}">
            <div className="top-half">
                <p className="location">{props.price}</p>
                <p className="price">$700</p>
            </div>

            <div className="bottom-half">
                <p className="seller_name">Jenny Springs</p>
                <p className="date">February 5th, 2020</p>
            </div>
        </a>
    </div>
  );
}

export default Card;
