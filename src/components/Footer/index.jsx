import './styled.css';

import React from 'react';
import logo from 'src/assets/images/logo_small.png';

import footerConfig from './config.js';

const { title, subtitle, links, copyright } = footerConfig;

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-about">
          <div className="footer-about-title">
            <img src={logo} alt="logotype" />
            <div className="footer-about-name">{title}</div>
          </div>
          <p className="footer-about-subtitle">{subtitle}</p>
        </div>
        <div className="footer-links">
          {links.map(({ linkName, subLinks }) => (
            <div key={linkName} className="footer-link flexColumn">
              <p className="footer-link-title">{linkName}</p>

              {subLinks.map(({ subLinkName }) => (
                <a className="footer-link-item" key={subLinkName} href="/">
                  {subLinkName}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-links-mobile">
          {links.map(({ linkName, subLinks }) => (
            <label key={linkName} className="footer-link-title-mobile">
              {linkName}
              <input type="checkbox" id="general" className="footer-link-checkbox" />
              <div className="footer-link-subtitle-wrapper flexColumn">
                {subLinks.map(({ subLinkName }) => (
                  <a className="footer-link-item" key={subLinkName} href="/">
                    {subLinkName}
                  </a>
                ))}
              </div>
            </label>
          ))}
        </div>
      </footer>
      <p className="copyright">{copyright}</p>
    </>
  );
};
export default Footer;
