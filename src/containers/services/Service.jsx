import React from "react";
import './Service.css';
import Service1Logo from './assets/career-guidance-logo.svg';
import Service2Logo from './assets/hiring-support-logo.svg';
import Service3Logo from './assets/career-building-logo.svg';
import Service4Logo from './assets/outsourcing-logo.svg';


const Service = () => {
    return (
        <div className="Service">
            <div className="ServiceHeading">
                <span className="IP-Grey-Text">Our</span> Services
            </div>
            <div className="Service-Grid">
                <div className="Service-1">
                    <div className="Service-Logo">
                        <img src={Service1Logo} alt="S1-Logo"/>
                    </div>
                    <div className="Service-Text">
                        <div className="Service-Heading">
                            <p>Career<br/>Guidance</p>
                        </div>
                        <div className="Service-Quote">
                            <p>Find who you are</p>
                        </div>
                    </div>
                </div>

                <div className="Service-2">
                    <div className="Service-Logo">
                            <img src={Service2Logo} alt="S2-Logo"/>
                    </div>
                    <div className="Service-Text">
                        <div className="Service-Heading">
                            <p>Hiring<br/>Support</p>
                        </div>
                        <div className="Service-Quote">
                            <p>Get your talent</p>
                        </div>
                    </div>
                </div>

                <div className="Service-3">
                    <div className="Service-Logo">
                            <img src={Service3Logo} alt="S3-Logo"/>
                    </div>
                    <div className="Service-Text">
                        <div className="Service-Heading">
                            <p>Career<br/>Building</p>
                        </div>
                        <div className="Service-Quote">
                            <p>Lets chase success</p>
                        </div>
                    </div>
                </div>

                <div className="Service-4">
                    <div className="Service-Logo">
                            <img src={Service4Logo} alt="S4-Logo"/>
                    </div>
                    <div className="Service-Text">
                        <div className="Service-Heading">
                            <p>Outsourcing</p>
                        </div>
                        <div className="Service-Quote">
                            <p>Find here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
