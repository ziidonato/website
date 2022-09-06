import React from 'react';
import pageStyles from "styles/components/Page.module.scss";
import DisplayCard from "../base/DisplayCard";

const About = () => {
    return (
        <div className={"flex flex-col h-full w-full items-center"} id={"skills"}>
            <h1 className={pageStyles.heading}>Skills</h1>
            <div className={pageStyles.pageContent}>
                <DisplayCard title={"Javascript"}>
                    - React.js
                    <br />
                    - Node.js
                    <br />
                    - Express.js
                    <br />
                    - Next.js
                    <br />
                    - Typescript
                    <br />
                    - Vue.js
                </DisplayCard>
            </div>
        </div>
    );
};

export default About;