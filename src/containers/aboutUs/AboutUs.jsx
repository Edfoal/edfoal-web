import React from "react";
import './AboutUs.css';
import Carousel from 'react-elastic-carousel';
import Item1 from './corousel/item1/Item1';
import Item2 from './corousel/item2/Item2';


const AboutUs = () => {
    return(
        <div className="about-us">
            <div className="about-us-heading">
                About Us
            </div>
            <div className="about-us-container">
                <Carousel 
                    showArrows={false}
                    autoPlaySpeed={2000}
                    enableAutoPlay={true}
                    enableMouseSwipe={true}>
                    <Item1></Item1>
                    <Item2/>
                </Carousel>
            </div>
        </div>
    );
}

export default AboutUs;