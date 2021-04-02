import React from 'react';
import './Footer.css';
import linkedin from '../images/Linkedin.png';
import twitter from '../images/Twitt.png';
import facebook from '../images/FB.png';

function Footer() {
    return (
        <div className="footer__">
            <div className="footer">
                <div className="footer_menu">
                    <h5>Other Links</h5>
                    <p>Site Requirements</p>
                    <p>User Agreement</p>
                    <p>Privacy policy</p>
                </div>
                <div className="footer_menu">
                    <h5>Contact</h5>
                    <p>Company</p>
                    <p>210 E. 3rd St., Ste. 100</p>
                    <p>Royal Oak, MI 48067</p>
                </div>
                <div className="footer_menu">
                    <h5>Email Us</h5>
                    <a href="customerservice@company.com">customerservice@company.com</a>
                </div>
                <div className="footer_menu">
                    <h5>Stay Connected</h5>
                    <div className="d-flex">
                        <img src={linkedin} alt="social media"/>
                        <img src={twitter} alt="social media"/>
                        <img src={facebook} alt="social media"/>
                    </div>
                    
                </div>
            </div>
            <div className="copyrights">
            Copyright 2019 - company | All Rights Reserved 
            </div>
        </div>
    )
}

export default Footer
