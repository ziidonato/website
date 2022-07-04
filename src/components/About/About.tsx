import React from 'react';
import ThreeTile from '../Templates/ThreeTile/ThreeTile';
interface AboutPropTypes {

}

const About = (props: AboutPropTypes) => {
    const details = [
        {
            title: "Studious",
            description: <>
                            <p className="lead">The best practices must always be followed if quality is a standard.</p>
                            <p>Since I'm working in computer science, the best practices are always changing, and I'm right there with them. Constantly adapting. Constantly reiterating.</p>
                            <h4>Current Topics:</h4>
                            <ul>
                                <li><h5>Design Patterns</h5>
                                    <p className="ms-5 me-5">Design patterns are ways to organize projects in a way that makes them easily malleable</p>
                                    <p className="ms-5 me-5">Without proper design patterns, one may find themselves spending a lot more time on editing and refactoring</p>
                                </li>
                            </ul>
                        </>,
            style: {
                color: "white",
                borderColor: "white",
                backgroundImage: `url(https://images.unsplash.com/photo-1614292264554-7dca1d6466d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
                backgroundSize: "150%",
            },
        },
        {
            title: "Methodical",
            description: <>
                            <p className="lead">Ok so what's the plan to start planning the plan</p>
                            <p>Since I've incorporated a consistent design plan in my projects, I have enjoyed the benefits that come with it.</p>
                            <p className="fst-italic">(My studying of design patterns has played a massive part in this)</p>
                            <h4>Benefits:</h4>
                            <ul>
                                <li><h5>Consistent Design</h5>
                                    <p className="ms-5 me-5">UI isn't a melting pot of decisions and experimentation</p>
                                </li>
                                <li><h5>Efficiency</h5>
                                    <p className="ms-5 me-5">Less time is spent making decisions while working on the project, resulting in better flow</p>
                                </li>
                            </ul>
                        </>,
            style: {
                borderColor: "white",
                backgroundImage: `url(https://images.unsplash.com/photo-1573166364266-356ef04ae798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80)`,
                backgroundSize: "cover",
            },
        },


    ]
    return (
        <>
            <h3 className="text-center display-3">About Me</h3>
            <ThreeTile details={details}/>
        </>
    );
}

export default About;