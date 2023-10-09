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
                    <div className="footer-link">
                        <p className="footer-link-title">General</p>

                        <a href="/" className="footer-link-item">
                            Market
                        </a>
                        <a href="/" className="footer-link-item">
                            Service
                        </a>
                    </div>
                    <div className="footer-link">
                        <p className="footer-link-title">Product</p>
                        <a href="/" className="footer-link-item">
                            Sparks
                        </a>
                        <a href="/" className="footer-link-item">
                            Snaps
                        </a>
                    </div>
                    <div className="footer-link">
                        <p className="footer-link-title">Community</p>
                        <a href="/" className="footer-link-item">
                            Ideas
                        </a>
                        <a href="/" className="footer-link-item">
                            Streams
                        </a>
                    </div>
                </div>

                <div className="footer-links-mobile">
                    <label className="footer-link-title-mobile">
                        General
                        <input
                            type="checkbox"
                            id="general"
                            className="footer-link-checkbox"
                        />
                        <div className="footer-link-subtitle-wrapper">
                            <a href="/" className="footer-link-item">
                                Market
                            </a>
                            <a href="/" className="footer-link-item">
                                Service
                            </a>
                        </div>
                    </label>
                    <label className="footer-link-title-mobile">
                        Product
                        <input
                            type="checkbox"
                            id="product"
                            className="footer-link-checkbox"
                        />
                        <div className="footer-link-subtitle-wrapper">
                            <a href="/" className="footer-link-item">
                                Sparks
                            </a>
                            <a href="/" className="footer-link-item">
                                Snaps
                            </a>
                        </div>
                    </label>
                    <label className="footer-link-title-mobile">
                        Community
                        <input
                            type="checkbox"
                            id="community"
                            className="footer-link-checkbox"
                        />
                        <div className="footer-link-subtitle-wrapper">
                            <a href="/" className="footer-link-item">
                                Ideas
                            </a>
                            <a href="/" className="footer-link-item">
                                Streams
                            </a>
                        </div>
                    </label>
                </div>
            </footer>
            <div className="copyright">{FooterConfig.COPYRIGHT}</div>
        </>
    );
};
export default Footer;