import React from "react";
import './Footer.css';
import logo from './assets/Edfoal-header-logo.svg';
import appComingSoon from './assets/App-Coming-Soon.svg';
import facebookLogo from './assets/facebook-logo.svg';
import twitterLogo from './assets/twitter-logo.svg';
import linkedinLogo from './assets/linkedin-logo.svg';
import instagramLogo from './assets/instagram-logo.svg';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-Top">
                <div className="Bar"></div>
            </div>
            <div className="Footer-Main">
                <div className="Flex-Item-1">
                    <div className="Edfoal-Logo">
                        <img className="Logo-Image" src={logo} alt="Edfoal logo"/>
                    </div>
                    <div className="Edfoal-Name">
                        <p>
                            <span className="F-Main-Heading">EdFoal</span>
                            <br/>
                            <span className="F-Sub-Heading">Education for all</span>
                        </p>
                    </div>
                    <div className="Edfoal-Address">
                        <p>
                            <span><b>Sangam Vihar, Delhi, New Delhi - 110080</b></span>
                            <br/>
                            <span><b><u>info@edfoal.com</u></b></span>
                        </p>
                    </div>
                </div>
                <div className="Flex-Item-2">

                </div>
                <div className="Flex-Item-3">
                    <div className="FI3-Main-Heading"><p>About us</p></div>
                    <div className="FI3-Sub-Heading"><p>About us<br/>Our Team<br/>Testimonials</p></div>
                    <div className="App-Coming-Soon">
                        <img src={appComingSoon} alt="App coming soon"/>
                    </div>
                </div>
                <div className="Flex-Item-4">
                    <div className="FI4-Main-Heading"><p>Follow us</p></div>
                    <div className="Follow-Logo">
                        <div className="FL-Container"><img src={facebookLogo} alt=""/></div>
                        <div className="FL-Container"><img src={twitterLogo} alt=""/></div>
                        <div className="FL-Container"><img src={linkedinLogo} alt=""/></div>
                        <div className="FL-Container"><img src={instagramLogo} alt=""/></div>
                    </div>
                </div>
            </div>
            <div className="Footer-Bottom">
                <div><p>© 2022 EdFoal. All rights reserved</p></div>
            </div>
        </div>
    )
};

export default Footer;
