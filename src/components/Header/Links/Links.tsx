import React from 'react';
import "./Links.scss";

interface LinksPropTypes {
    links?: {
        name: string;
        url: string;
    }[];
}

const Links = (props: LinksPropTypes) => (
    <div className="links">
        <a href="https://docs.google.com/document/d/e/2PACX-1vTX8bQOaDyokDKjB5A9Nx-k8U5CbvDqUjK5_UIYY0Uuhfi3WFB4drlk-pPHHC9V1PZ1EdsFlAkcupTe/pub"
           target="_blank" rel="noreferrer">
            <i className="fa-solid fa-file"></i>
        </a>
        <a href="https://github.com/gatlace"
           target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"/>
        </a>
        <a href="https://www.linkedin.com/in/zii-donato-868701224/"
           target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"/>
        </a>
    </div>
);

export { Links };
