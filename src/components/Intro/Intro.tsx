import { useState, useEffect, useReducer } from 'react';
import "../global.scss"
import "./Intro.scss"
import About from '../About/About';

interface IntroPropTypes {

}

const Intro = (props: IntroPropTypes) => {
    const [isClicked, setIsClicked] = useState(false);
    const [input, setInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isGood, setIsGood] = useState<boolean | null>(null);
    const stringOutput = isGood === null
        ? "Huh?"
        : isGood
            ? "Yay! :)"
            : "Aww :("

    const handleClick = () => setIsClicked(true)
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();


        if (input.length === 0) {
            return;
        }

        if (input.toLowerCase() === "yes" || input.toLowerCase() === "y") {
            setIsGood(true);
        } else if (input.toLowerCase() === "no" || input.toLowerCase() === "n") {
            setIsGood(false);
        }


        setInput("");
        setSubmitted(true);
        e.currentTarget.reset();
    }

    const wellIsIt = () => {
        return (
            <div className="well-is-it">
                <p className="lead">Well, is it?</p>
                <form name="is-code-good" onSubmit={handleSubmit}>
                    <input type="text" value={input} placeholder="[y]es/[n]o"
                        onChange={(e) => setInput(e.target.value)} />
                    <input type="submit" style={{ display: "none" }} />
                </form>
            </div>
        )
    }

    return (
        <div className="component" id='home'>
            <h1 className="display-1">Hi!</h1>
            <h2 className="display-4"> I write code. </h2>
            {isClicked ? wellIsIt() :
                <p className="lead">{"Is it good? "}
                    <span>
                        <a href="https://github.com/gatlace"
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleClick}
                        >
                            I don't know, you tell me.
                        </a>
                    </span>
                </p>
            }
            {submitted && <p className="lead">{stringOutput}</p>}
        </div>
    );
}

export default Intro;
