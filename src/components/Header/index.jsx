import './styled.css';

import React from 'react';
import logo from 'src/assets/images/logo_big.png';

import HeaderConfig from './config';
const { titleFirstRow, titleSecondRow, subtitleRow } = HeaderConfig;
const Header = () => {
  return (
    <header className="wrapper">
      <div className="text">
        <div className="title-wrapper">
          <span className="title">{titleFirstRow}</span>
          <span className="title">{titleSecondRow}</span>
        </div>
        <div className="subtitle">{subtitleRow}</div>
      </div>
      <img src={logo} className="curLogo" alt="logotype" />
    </header>
  );
};
export default Header;
