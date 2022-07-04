import { FC } from 'react';
import './Header.scss';
import { Nav } from "./Nav/Nav";
import { Links } from "./Links/Links";

const Header:FC = () => {
    return(
    <header>
        <Nav />
        <div className="header container">
            <h1 className="Display-1">Zii Donato</h1>
            <h3>'Cause it ain't no dev unless it's web dev</h3>
        </div>
        <Links />
    </header>
    );
};

export default Header;
