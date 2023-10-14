import './styled.css';

import React from 'react';
import logo from 'src/assets/images/logo_small.png';

import FooterConfig from './config';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-about">
                    <div className="footer-about-title">
                        <img src={logo} alt="logotype" />
                        <div className="footer-about-name">
                            {FooterConfig.TITLE}
                        </div>
                    </div>
                    <p className="footer-about-subtitle">
                        {FooterConfig.SUBTITLE}
                    </p>
                </div>
                <div className="footer-links">
                    {FooterConfig.LINKS.map((link) => (
                        <div key={link.linkName} className="footer-link">
                            <p className="footer-link-title">{link.linkName}</p>

                            {link.subLinks.map((sublink) => (
                                <a
                                    className="footer-link-item"
                                    key={sublink.subLinkName}
                                    href="/"
                                >
                                    {sublink.subLinkName}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="footer-links-mobile">
                    {FooterConfig.LINKS.map((link) => (
                        <label
                            key={link.linkName}
                            className="footer-link-title-mobile"
                        >
                            {link.linkName}
                            <input
                                type="checkbox"
                                id="general"
                                className="footer-link-checkbox"
                            />
                            <div className="footer-link-subtitle-wrapper">
                                {link.subLinks.map((sublink) => (
                                    <a
                                        className="footer-link-item"
                                        key={sublink.subLinkName}
                                        href="/"
                                    >
                                        {sublink.subLinkName}
                                    </a>
                                ))}
                            </div>
                        </label>
                    ))}
                </div>
            </footer>
            <div className="copyright">{FooterConfig.COPYRIGHT}</div>
        </>
    );
};
export default Footer;
