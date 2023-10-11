import './styled.css';

import React from 'react';
import logo from 'src/assets/images/logo_big.png';

import HeaderConfig from './config';
const Header = () => {
    return (
        <div className="wrapper">
            <div className="text">
                <div className="title-wrapper">
                    <span className="title">
                        {HeaderConfig.TITLE_FIRST_ROW}
                    </span>
                    <span className="title">
                        {HeaderConfig.TITLE_SECOND_ROW}
                    </span>
                </div>
                <div className="subtitle">{HeaderConfig.SUBTITLE_ROW}</div>
            </div>
            <img src={logo} className="curLogo" alt="logotype" />
        </div>
    );
};
export default Header;
