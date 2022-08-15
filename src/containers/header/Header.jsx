import React from "react";
import './Header.css';
import logo from './assets/Edfoal-header-logo.svg';
import btnLogo from './assets/header-btn-logo.svg';


const Header = () => {
    return (
        <div className="Header">
            <span className="Header-Span">
                <p className="Main-Heading">Our Vision<br/>Your Success</p>
                <p className="Sub-Heading">Building a path to your success</p>
            
                <div className="Header-btn">
                    <div className="Header-btn-image">
                        <img src={btnLogo} className="Header-btn-image" alt="logo"></img>
                    </div>
                    <div className="Header-btn-label">
                        START YOUR JOURNEY
                    </div>
                </div>
            </span>
            <span className="Header-Span">
                <img src={logo} alt="logo"></img>
            </span>
        </div>
    )
};

export default Header;
