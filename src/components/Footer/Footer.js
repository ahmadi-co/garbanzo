import React from 'react';
import './footer.css';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import RowDotBackground from "../BlobBackground/RowDotBackground";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function Footer() {

    const handleMail = () => {
        window.location.href = 'mailto:info@cryptomaster.exchange';
    };

    const handlePhone = () => {
        window.open('tel:+905488586787', '_blank');
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/+905391030760', '_blank');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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
                                    <img src={require('../../assets/header/logo.png')} className='footer-logo' />
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
                                    <Link to='/#home' className="footer-link" onClick={scrollToTop} >
                                        Home
                                    </Link>
                                    <HashLink
                                        to='/#services'
                                        className="footer-link"

                                    >
                                        Our Services
                                    </HashLink>
                                    <HashLink
                                        to='/#why-us'
                                        className="footer-link"
                                    >
                                        Why Us
                                    </HashLink>
                                    <Link
                                        to='/our-cards'
                                        className="footer-link"
                                    >
                                        Cards
                                    </Link>

                                    <HashLink
                                        to='/about-us'
                                        className="footer-link"
                                    >
                                        About Us
                                    </HashLink>
                                    <Link
                                        to='/contact-us'
                                        className="footer-link"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="footer-section">
                                <h3 className="footer-title">Contact Us</h3>
                                <div className="contact-item" onClick={handleMail}>
                                    <FaMapMarkerAlt className="contact-icon" size={18} />
                                    <span>
                                        Semih Sancar Caddesi, Ersin Dikerman Dükkanları No: 4 Girne, KKTC
                                    </span>
                                </div>
                                <div className="contact-item" onClick={handleMail}>
                                    <FaEnvelope className="contact-icon" size={18} />
                                    <span>info@cryptomaster.exchange</span>
                                </div>
                                <div className="contact-item" onClick={handlePhone}>
                                    <FaPhone className="contact-icon" size={18} />
                                    <span>+90 548 858 67 87</span>
                                </div>

                                <div className="contact-item" onClick={handleWhatsApp}>
                                    <FaWhatsapp className="contact-icon" size={18} />
                                    <span>+90 539 103 07 60</span>
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