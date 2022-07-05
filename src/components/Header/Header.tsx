import './Header.scss';
import { useEffect, useState } from 'react';
import { Nav } from "./Nav/Nav";
import { Links } from "./Links/Links";

interface HeaderProps {
}

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768);
        });
    }, []);

    return (
        <header>
            <Nav hidden={isMobile} />
            <div className="header">
                <h1 className="Display-1">Zii Donato</h1>
            </div>
            <Links />
        </header>
    );
};

export default Header;
