import React, { useState, useEffect } from 'react';
import Intro from './Intro/Intro';
import About from './About/About';
import Experience from './Experience/Experience';
import "./Scroll.scss";


interface ScrollPropTypes {

}

const Scroll = (props: ScrollPropTypes) => {

    return(
    <div className={"scroll"}>
        <div className="component">
            <Intro />
        </div>
        <div className="component">
            <Experience />
        </div>
        <div className="component">
            <About />
        </div>
    </div>
    )

};

export default Scroll;
