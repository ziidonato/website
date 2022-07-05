import './Header.scss';
import { Nav } from "./Nav/Nav";
import { Links } from "./Links/Links";
import { DeviceType, useDeviceType } from '../../hooks/useDeviceType';

interface HeaderProps {
}

const Header = () => {
    const isMobile = DeviceType.MOBILE === useDeviceType()

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
