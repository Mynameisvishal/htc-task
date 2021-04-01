import React from 'react';
import banner from '../images/Banner.jpg';
import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <img src={banner} width="100%" alt="banner"/>
            <p> <span>Company</span> is an innovative e-commerce platform designed for re-tailers and pharmacies across the US to purchase unique gifts and
            merchandise for the front-end of the pharmacy.</p>
        </div>
    )
}

export default Banner
