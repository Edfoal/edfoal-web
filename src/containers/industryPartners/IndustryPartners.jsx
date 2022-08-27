import React from "react";
import './IndustryPartners.css'
import cvtLogo from './assets/cvtLogo.svg';
import concirrusLogo from './assets/concirrusLogo.svg';
import yomaLogo from './assets/yomaLogo.svg';


const IndustryPartners = () => {
    return(
        <div className="IndustryPartners">
            <div className="IndustryPartnersHeading">
                <span className="IP-Grey-Text">Our</span> Industry Partners
            </div>
            <div className="IPSpace"></div>
            <div className="IndustryLogoContainer">
                <div className="PartnerLogo">
                    <img src={cvtLogo} alt="cvt logo"/>
                </div>
                <div className="PartnerLogo">
                    <img src={concirrusLogo} alt="concirrus logo"/>
                </div>
                <div className="PartnerLogo">
                    <img src={yomaLogo} alt="yoma logo"/>
                </div>
            </div>
        </div>
    )
};

export default IndustryPartners;