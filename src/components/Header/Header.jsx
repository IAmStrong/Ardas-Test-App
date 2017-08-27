import React from 'react';
import './header.less';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img
                src={logo}
                alt="logo"
            />
        </header>
    );
};

export default Header;