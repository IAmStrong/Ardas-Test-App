import React from 'react';
import './header.less';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img role="presentation" src={logo} />
    </header>
  );
};

export default Header;

