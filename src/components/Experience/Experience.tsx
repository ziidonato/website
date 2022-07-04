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
                            A simple Chess game written in Python
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
                                <a href="https://github.com/gatlace/poker-js" target="_blank" rel="noreferrer">
                                    Poker<span className="badge text-bg-success">Finished</span>
                                </a>
                            </h4>
                                <p> - My first web app, built with React</p>
                            <h4>
                                <a href="https://github.com/gatlace/commits-frontend" target="_blank" rel="noreferrer">
                                    Commits Frontend<span className="badge text-bg-success">Finished</span>
                                </a>
                            </h4>
                            <p> - A frontend that lets you view recent commits to github projects</p>
                            Features:
                            <ul>
                                <li>
                                    <p> View all public repos for a user</p>
                                </li>
                                <li>
                                    <p> Search users</p>
                                </li>
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
                        <h4>Git</h4>
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
