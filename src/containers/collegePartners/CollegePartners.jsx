import React from "react";
import './CollegePartners.css'
import c1 from './assets/c1.svg';
import c2 from './assets/c2.svg';
import c3 from './assets/c3.svg';
import c4 from './assets/c4.svg';


const CollegePartners = () => {
    return(
        <div className="CollegePartners">
            <div className="CollegePartnersHeading">
                <span className="CP-Grey-Text">Our</span> College Partners
            </div>
            <div className="CPSpace">
                
            </div>
            <div className="CollegeLogoContainer">
                <div className="CollegePartnerLogo">
                    <img src={c1} alt="cvt logo"/>
                </div>
                <div className="CollegePartnerLogo">
                    <img src={c2} alt="concirrus logo"/>
                </div>
                <div className="CollegePartnerLogo">
                    <img src={c3} alt="yoma logo"/>
                </div>
                <div className="CollegePartnerLogo">
                    <img src={c4} alt="yoma logo"/>
                </div>
            </div>
        </div>
    )
};

export default CollegePartners;