import './styled.css';

import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from 'src/assets/images/logo_small.png';
import ROUTES from 'src/constants/routes.js';
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
  const links = ROUTES.map(
    ({ path, pageName }) =>
      pageName && (
        <li key={path}>
          <Link
            to={path}
            data-testid={path}
            className={`link ${location.pathname === path ? 'active' : ''}`}
          >
            {pageName}
          </Link>
        </li>
      ),
  );
  return (
    <nav className="navbar">
      <Link to="/" data-testid="logoLink">
        <img src={Logo} alt="logotype" className="logo" />
      </Link>
      <div className="menu-toggle" data-testid="menu-toggle" onClick={toggleMenuButton}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <div className={`linksWrapper`}>
        <div
          data-testid="menu-wrapper"
          className={`menu-wrapper ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenuButton}
        >
          <ul className={`flexColumn menu-content ${isMenuOpen ? 'open' : ''}`}>{links}</ul>
        </div>

        <div className="links">
          <ul className="linkList">{links}</ul>
        </div>
      </div>
      <div className="switch">
        <ThemeSwitcher handleChangeTheme={handleChangeTheme} theme={theme} />
      </div>
    </nav>
  );
};

export default Navbar;
