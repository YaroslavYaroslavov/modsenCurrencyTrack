/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './styled.css';

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/images/logo_small.png';
import { useTheme } from '../../hooks/use-theme';
import ThemeSwitcher from '../ThemeSwitcher/index.jsx';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    const handleChangeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const handleChangePage = () => {};

    return (
        <div className="navbar">
            <a href="/">
                <img src={Logo} alt="" className="logo" />
            </a>
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
                        <li>
                            <Link
                                to="/"
                                onClick={handleChangePage}
                                className={`link ${
                                    location.pathname === '/' ? 'active' : ''
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/timeline"
                                onClick={handleChangePage}
                                className={`link ${
                                    location.pathname === '/timeline'
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                Timeline
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/bankcard"
                                onClick={handleChangePage}
                                className={`link ${
                                    location.pathname === '/bankcard'
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                Bankcard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contato"
                                onClick={handleChangePage}
                                className={`link ${
                                    location.pathname === '/contato'
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="links">
                    <Link
                        to="/"
                        onClick={handleChangePage}
                        className={`link ${
                            location.pathname === '/' ? 'active' : ''
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/timeline"
                        onClick={handleChangePage}
                        className={`link ${
                            location.pathname === '/timeline' ? 'active' : ''
                        }`}
                    >
                        Timeline
                    </Link>
                    <Link
                        to="/bankcard"
                        onClick={handleChangePage}
                        className={`link ${
                            location.pathname === '/bankcard' ? 'active' : ''
                        }`}
                    >
                        Bank card
                    </Link>
                    <Link
                        to="/contato"
                        onClick={handleChangePage}
                        className={`link ${
                            location.pathname === '/contato' ? 'active' : ''
                        }`}
                    >
                        Contato
                    </Link>
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
