import React from 'react';
import './Card.css';
// import img from './'
function Card(prop) {
  return (
    <div className="Card">
        {/* <img src="https://www.my-booker.com/lite-templates/template-one-version-one/images/gallery/3.jpg"></img>   */}
        <a className="link" href="/">
            <div className="top-half">
                <p className="location">Address</p>
                <p className="price">$700</p>
            </div>

            <div className="bottom-half">
                <p className="seller_name">Jenny Springs</p>
                <p className="date">February 5th, 2020</p>
            </div>
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
