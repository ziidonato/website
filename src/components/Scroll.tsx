import React, { useState, useEffect } from 'react';
import Intro from './Intro/Intro';
import About from './About/About';
import Experience from './Experience/Experience';


interface ScrollPropTypes {

}

const Scroll = (props: ScrollPropTypes) => {

    return (
        <div>
            <Intro />
            <Experience />
            <About />
        </div>
    )

};

export default Scroll;
