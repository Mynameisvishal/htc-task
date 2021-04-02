import React,{useState} from 'react';
import "./Navbar.css";
import logo from '../images/Logo.png';

const Navbar=()=> {

    const[smallScreen, setSmallScreen]=useState(true);
    const displayToggle = ()=>{
        setSmallScreen(prevSmallScreen=> !prevSmallScreen);
        if(smallScreen){
            document.querySelector('.nav__linksDown').style.display="flex";
        }else{
            document.querySelector('.nav__linksDown').style.display="none";
        }
    }
    
    return (
        <div className="navbar__">
            <nav id="nav">
                <div className="nav__brand">
                    <img src={logo} width="35px" alt="logo" height="35px" />
                    <h4>Company Logo</h4>   
                </div>
                <div onClick={displayToggle} className="menu-bar">
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
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
            <div className="nav__linksDown">
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
        </div>
    )
}



export default Navbar
