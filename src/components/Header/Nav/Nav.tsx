import { useState, useEffect, useContext } from 'react';
import "./Nav.scss"
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

interface NavPropTypes {
    hidden: boolean;
}

const Nav = (props: NavPropTypes) => {
    const [active, setActive] = useState(useLocation().hash);
    const [location, setLocation] = useState(useLocation().hash);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const pages = ["home", "experience", "about"];

    
    useEffect(() => {
        setActive(location);
    }, [location]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(Math.floor((window.scrollY / window.innerHeight) * 100))
        })
    });
    

    useEffect(() => {

            if (scrollY < 75 ) {
                setActive("#home");
            } else if (scrollY < 150) {
                setActive("#experience");
            } else {
                setActive("#about");
            }
    }, [scrollY]);


    return (
        <div className={"nav-section " + (props.hidden? "visually-hidden" : "")}>
        <ul className="nav nav-pills">
            { pages.map((page, index) => {
                let hash = "#" + page;
                return (
                    <li className="nav-item" key={index}>
                        <Link to={`#${page}`}
                            className={`nav-link ${active === hash ? "active" : ""}`}>
                            {page}
                            </Link>
                    </li>
                )
            }
            )}
        </ul>
        </div>
    );
};

export { Nav };
