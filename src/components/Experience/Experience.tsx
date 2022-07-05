import ThreeTile from '../Templates/ThreeTile/ThreeTile';
import javascript_logo from "../../assets/svgs/js";
import bash_logo from "../../assets/svgs/bash";
import python_logo from "../../assets/svgs/python";
import "../global.scss"

const details = [
    {
        title: "Python",
        description: <><p className="lead">My first language, and preferred logic language</p>
            <div className="container">
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
            <p className="lead">For everything web dev</p>
            <div className="container">
                <h4>
                    <a href="http://poker-js.vercel.app/" target="_blank" rel="noreferrer">
                        Poker</a> |
                    <a href="http://github.com/gatlace/poker-js" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-code" />
                    </a>
                    <span className="badge text-bg-success">Finished</span>
                </h4>
                <div>3 Player Poker, can be expanded for more players.</div>
                <ul>
                    <li>My first web app</li>
                    <li>Built with React</li>
                </ul>
                <h4>
                    <a href="http://github-commits-frontend.vercel.app" target="_blank" rel="noreferrer">
                        Commits Frontend</a> |
                    <a href="http://github.com/gatlace/commits-frontend" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-code" />
                    </a>
                    <span className="badge text-bg-success">Finished</span>
                </h4>
                <div>A frontend that lets you view recent commits to github projects.</div>
                <ul>
                    <li>Built with Vue</li>
                    <li>Features:</li>
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
        title: "Others",
        description: <>
            <p className="lead">Other skills I've picked up over the years</p>
            <div className="container">
                <h4>Linux</h4>
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
            </div>
        </>,
        picture: bash_logo()
    },
]

interface ExperiencePropTypes {

}

const Experience = (props: ExperiencePropTypes) => {
    return (            
        <div className="component">
            <h2 className="text-center display-3">Experience</h2>
            <ThreeTile details={details} />
        </div>
    );
};

export default Experience;
