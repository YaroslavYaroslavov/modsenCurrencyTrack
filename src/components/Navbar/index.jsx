import './styled.css';

import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'src/assets/images/logo_small.png';
import PATHS from 'src/constants/pathsArray.js';
import { useTheme } from 'src/hooks/use-theme';

import ThemeSwitcher from './ThemeSwitcher/index.jsx';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    const handleChangeTheme = useCallback(() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }, [setTheme, theme]);
    const toggleMenuButton = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={Logo} alt="logotype" className="logo" />
            </Link>
            <div className="menu-toggle" onClick={toggleMenuButton}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
            <div className={`linksWrapper`}>
                <div
                    className={`menu-wrapper ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenuButton}
                >
                    <ul className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
                        {PATHS.map(({ path, pageName }) => (
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
                    {PATHS.map(({ path, pageName }) => (
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
        </nav>
    );
};

export default Navbar;
