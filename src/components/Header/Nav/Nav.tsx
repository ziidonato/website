import { useState, useEffect } from 'react';
import "./Nav.scss"
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

interface NavPropTypes {

}

const Nav = (props: NavPropTypes) => {
    let [active, setActive] = useState(useLocation().hash);

    const location = useLocation().hash;

    useEffect(() => {
        console.log(location);
        setActive(location);
    }, [location]);



    const pages = ["home", "experience", "about"];

    return (
        <div className="nav-section">
        <ul className="nav nav-pills flex-column">
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
