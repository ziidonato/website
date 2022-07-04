import { useState, useEffect } from 'react';
import "./Intro.scss"
import About from '../About/About';

interface IntroPropTypes {

}

const Intro = (props: IntroPropTypes) => {
    const [isClicked, setIsClicked] = useState(false);
    const [input, setInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [returnString, setReturnString] = useState("");
    const [isGood, setIsGood] = useState(false);

    useEffect(() => {
        if (isGood) {
            setReturnString("Yay! :)");
        } else {
            setReturnString("Aww :(");
        }
    }, [isGood]);

    const handleClick = () => {
        setIsClicked(true);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        console.log(input);

        if (input.length === 0) {
            return;
        }

        if (input.toLowerCase() === "yes") {
            setIsGood(true);
        } else if (input.toLowerCase() === "no") {
            setIsGood(false);
        } else {
            setReturnString("Huh?")
        }
        

        setInput("");
        setSubmitted(true);
        e.currentTarget.reset();
    }

    const wellIsIt = () => {
        return (<div className="well-is-it">
            <p className="lead">Well, is it?</p>
            <form name="is-code-good" onSubmit={handleSubmit}>
                <input type="text" value={input} placeholder="yes/no"
                       onChange={(e) => {
                    setInput(e.target.value);
                }}/>
        <input type="submit" style={{display: "none"}}/>
            </form>
        </div>)
    }

    return (
        <>
            <h1 className="display-1">Hi!</h1>
            <h2 className="display-4"> I write code. </h2>
            { isClicked? wellIsIt() :
                <p className="lead">{ "Is it good? " }
                    <span>
                        <a
                            href="https://github.com/gatlace"
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleClick}
                        >
                            I don't know, you tell me.
                        </a>
                    </span>
                </p>
            }
            { submitted? <p className="lead">{ returnString }</p> : null }
        </>
    );
}

export default Intro;
