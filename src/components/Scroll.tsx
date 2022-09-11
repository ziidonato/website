import React, { useState, useEffect } from 'react';
import Intro from './Intro/Intro';
import About from './About/About';
import Experience from './Experience/Experience';
import "./Scroll.scss";


interface ScrollPropTypes {

}

const Scroll = (props: ScrollPropTypes) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768);
        });
    });

    return(
    <div className={"scroll"}>
        <div className="component intro" id="home">
            <Intro />
        </div>
        <div className="component" id="experience">
            <Experience />
        </div>
        <div className="component" id="about">
            <About />
        </div>
    </div>
    )

};

export default Scroll;
