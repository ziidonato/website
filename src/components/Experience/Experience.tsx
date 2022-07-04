import ThreeTile from '../Templates/ThreeTile/ThreeTile';
import javascript_logo from "../../assets/js";
import bash_logo from "../../assets/bash";
import python_logo from "../../assets/python";

const details = [
    {
        title: "Python",
        description: <><p className="lead">My first language, and preferred logic language</p>
                        <div>
                            <h4>
                                <a href="https://github.com/gatlace/Chess" target="_blank" rel="noreferrer">
                                    Chess<span className="badge text-bg-primary">WIP</span>
                                </a>
                            </h4>
                            <p>A simple chess game written in Python.</p>
                            <h4>Credit Game Backend<span className="badge text-bg-warning">Archived</span></h4>
                            <p>A finance game that simulates credit score, interest rate, and more</p>
                            <ul>
                                <li>Built with Django</li>
                                <li>Hackathon Project for Capital One</li>
                            </ul>
                        </div>
                    </>,
        picture: python_logo(),
    },
    {
        title: "JavaScript",
        description: <>
                        <p className="lead">Wait, TypeScript didn't exist at one point?</p>
                        <div>
                            <h4>
                                <a href="http://poker-js.vercel.app/" target="_blank" rel="noreferrer">
                                    Poker</a> | 
                                    <a href="http://github.com/gatlace/poker-js" target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-code"/>
                                    </a>
                                    <span className="badge text-bg-success">Finished</span>
                            </h4>
                                <p>3 Player Poker, can be expanded for more players.</p>
                            <ul>
                                <li>My first web app</li>
                                <li>Built with React</li>
                            </ul>
                            <h4>
                                <a href="http://github-commits-frontend.vercel.app" target="_blank" rel="noreferrer">
                                    Commits Frontend</a> | 
                                    <a href="http://github.com/gatlace/commits-frontend" target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-code"/>
                                    </a>
                                    <span className="badge text-bg-success">Finished</span>
                            </h4>
                            <p>A frontend that lets you view recent commits to github projects.</p>
                            <ul>
                                Features:
                                <ul>
                                    <li>View all public repos for a user</li>
                                    <li>Search users</li>
                                </ul>
                            </ul>
                        </div>
                    </>,
        picture: javascript_logo()
    },
    {
        title: "Other Skills",
        description: <>
                        <p className="lead">
                            Are you SURE you've tried restarting?
                        </p>
                        <h4>Linux<span className="badge text-bg-info">ARCH BTW</span></h4>
                        <ul>
                            <li>
                                <p>Bash scripting</p>
                            </li>
                        </ul>
                        <h4>Other Languages</h4>
                        <ul>
                            <li>Rust | C | Arduino</li>
                        </ul>
                        <h4>Amazon Web Services</h4>
                        <ul>
                            <li>(This website)</li>
                        </ul>
                        <h4>Version Control</h4>
                        <ul>
                            <li>Continuous Integration/Deployment</li>
                        </ul>
                    </>,
        picture: bash_logo()
    },
]

interface ExperiencePropTypes {

}

const Experience = (props: ExperiencePropTypes) => {
    return (
        <>
            <h2 className="text-center display-3">Experience</h2>
            <ThreeTile details={details}/>
        </>
    );
};

export default Experience;
