import React from "react";
import './Team.css'
import om from './assets/memOm.svg';
import palak from './assets/memPalak.svg';
import subham from './assets/memSubham.svg';
import ravi from './assets/memRavi.svg';


const Team = () => {
    return(
        <div className="Team">
            <div className="TeamHeading">
                <span className="Team-Grey-Text">Our</span> Team
            </div>
            <div className="TeamDescription">
                We are a dynamic team ofyoung enthusiasts having the support and guidance from industry leaders. We believe in mixing the energy of young teammates with the experience of our industry leaders.
            </div>
            <div className="TeamContainer">
                <div className="TeamMember">
                    <div className="ProfilePhoto">
                        <img src={om} alt="om profile"/>
                    </div>
                    <div className="ProfileName">
                        Om Singh
                    </div>
                    <div className="ProfileDesignation">
                        Co-Founder
                    </div>
                </div>
                <div className="TeamMember">
                    <div className="ProfilePhoto">
                            <img src={palak} alt="palak profile"/>
                        </div>
                        <div className="ProfileName">
                            Palak Gupta
                        </div>
                        <div className="ProfileDesignation">
                            Co-Founder
                        </div>
                </div>
                <div className="TeamMember">
                    <div className="ProfilePhoto">
                            <img src={subham} alt="subham profile"/>
                        </div>
                        <div className="ProfileName">
                            Subham Kumar
                        </div>
                        <div className="ProfileDesignation">
                            Community Lead
                        </div>
                </div>
                <div className="TeamMember">
                    <div className="ProfilePhoto">
                            <img src={ravi} alt="ravi profile"/>
                        </div>
                        <div className="ProfileName">
                            Ravi Pawar
                        </div>
                        <div className="ProfileDesignation">
                            Tech Lead
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Team;