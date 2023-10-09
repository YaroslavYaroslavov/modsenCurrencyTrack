import './styled.css';

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'src/assets/images/logo_small.png';
import { useTheme } from 'src/hooks/use-theme';

import configNavbar from './config.js';
import ThemeSwitcher from './ThemeSwitcher/index.jsx';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    const handleChangeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <div className="navbar">
            <Link to="/">
                <img src={Logo} alt="logotype" className="logo" />
            </Link>
            <div
                className="menu-toggle"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
            <div className={`linksWrapper`}>
                <div
                    className={`menu-wrapper ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => {
                        setIsMenuOpen((prev) => !prev);
                    }}
                >
                    <ul className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
                        {configNavbar.PATHS.map(({ path, pageName }) => (
                            <li key={path}>
                                <Link
                                    to={`/${path}`}
                                    className={`link ${
                                        location.pathname === `/${path}`
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    {pageName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="links">
                    {configNavbar.PATHS.map(({ path, pageName }) => (
                        <Link
                            to={`/${path}`}
                            className={`link ${
                                location.pathname === `/${path}` ? 'active' : ''
                            }`}
                            key={path}
                        >
                            {pageName}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="switch">
                <ThemeSwitcher
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />
            </div>
        </div>
    );
};

export default Navbar;
