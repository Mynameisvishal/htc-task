import React from 'react';
import "./Navbar.css";
import logo from '../images/Logo.png';
// import {Form , Button,FormControl,Nav,NavDropdown} from "react-bootstrap";

const Navbar=()=> {
    return (
        <div>
           
            <nav>
                <div className="nav__brand">
                    <img src={logo} width="35px" alt="logo" height="35px" />
                    <h4>Company Logo</h4>   
                </div>
                <div className="nav__links">
                    <li className="nav-item">
                        <a className=" __active nav-link" href="/#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                        How It Works
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            FAQ
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="/#">
                            About Us
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="/#">
                            Contact Us
                        </a>
                    </li>
                </div>
            </nav>
        </div>
    )
}



export default Navbar
