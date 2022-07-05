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
        <a href="https://drive.google.com/file/d/1g7Bq3dz_CShzgYLh8_THr2MZWPCa2RFv/view?usp=sharing"
            target="_blank" rel="noreferrer">
            <i className="fa-solid fa-file"></i>
        </a>
        <a href="https://github.com/gatlace"
            target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/zii-donato-868701224/"
            target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in" />
        </a>
    </div>
);

export { Links };
