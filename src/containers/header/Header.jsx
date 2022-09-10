import React from "react";
import './Header.css';
import logo from './assets/Edfoal-header-logo.svg';
import btnLogo from './assets/header-btn-logo.svg';
import {Navbar} from '../../components/index';


const Header = () => {
    return (
        <div className="Header">
            <div><Navbar/></div>
            <div className="Header-Main">
                <div className="Header-Span">
                    <p className="Main-Heading">
                        <span className="MH-small">Our</span><span className="MH-large"> Vision</span>
                        <br/>
                        <span className="MH-small">Your</span><span className="MH-large"> Success</span>
                    </p>
                    <p className="Sub-Heading">Building a path to your success</p>
                
                    <div className="Header-btn">
                        <div className="Header-btn-image">
                            <img src={btnLogo} className="Header-btn-image" alt="logo"></img>
                        </div>
                        <div className="Header-btn-label">
                            START YOUR JOURNEY
                        </div>
                    </div>
                </div>
                <div className="Header-Span Header-Logo">
                    <div>
                        <img src={logo} alt="logo"></img>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
