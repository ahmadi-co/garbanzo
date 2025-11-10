import React from 'react';
import './footer.css';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/header/logo.svg'
import RowDotBackground from "../BlobBackground/RowDotBackground";

export default function Footer() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMail = () => {
        window.location.href = 'mailto:info@cryptomaster.exchange';
    }

    return (
        <>
            <footer className="footer">
                <div className="footer-container ">
                    <div className='container' style={{position: "relative"}}>
                        <RowDotBackground />

                        <div className="footer-content ">

                            {/* Company Info */}
                            <div className="footer-section">
                                <div className="footer-logo">
                                    <img src={logo} className='footer-logo' />
                                </div>
                                <p className="footer-description">
                                    Your reliable partner in the world of crypto payments.
                                </p>
                                <div className="social-links">
                                    <a href="#" className="social-link" aria-label="Twitter">
                                        <FaTwitter size={18} />
                                    </a>
                                    <a href="#" className="social-link" aria-label="Facebook">
                                        <FaFacebook size={18} />
                                    </a>
                                    <a href="#" className="social-link" aria-label="LinkedIn">
                                        <FaLinkedin size={18} />
                                    </a>
                                    <a href="#" className="social-link" aria-label="Instagram">
                                        <FaInstagram size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="footer-section">
                                <h3 className="footer-title">Quick Links</h3>
                                <div className="footer-links">
                                    <a className="footer-link" onClick={() => scrollToSection('home')}>Home</a>
                                    <a className="footer-link" onClick={() => scrollToSection('why-us')}>Why Us</a>
                                    <a className="footer-link" onClick={() => scrollToSection('cards')}>Cards</a>
                                    <a className="footer-link" onClick={() => scrollToSection('about')}>About Us</a>
                                    <a className="footer-link" onClick={() => scrollToSection('contact')}>Contact Us</a>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="footer-section">
                                <h3 className="footer-title">Contact Us</h3>
                                <div className="contact-item" onClick={handleMail}>
                                    <FaEnvelope className="contact-icon" size={18} />
                                    <span>info@cryptomaster.exchange</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer-divider"></div>

                        <div className="footer-bottom">
                            <p className="footer-copyright">
                                © 2025 Crypto Master. All rights reserved.
                            </p>
                            <div className="footer-bottom-links">
                                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                                <a href="#" className="footer-bottom-link">Terms of Service</a>
                                <a href="#" className="footer-bottom-link">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}