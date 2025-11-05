import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/header/logo.svg'

export default function Footer() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <style>{`
        .footer {
          background: linear-gradient(180deg, rgba(30, 58, 138, 0.95) 0%, rgba(23, 37, 84, 0.98) 100%);
          color: white;
          padding: 3rem 1.5rem 1.5rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-content {
            grid-template-columns: 2fr 1fr 1.5fr;
          }
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          font-size: 1.75rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-logo-highlight {
          color: #22d3ee;
        }

        .footer-description {
          color: #d1d5db;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .footer-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #22d3ee;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          position: relative;
          padding-left: 0;
        }

        .footer-link:hover {
          color: #22d3ee;
          padding-left: 0.5rem;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .footer-link:hover::before {
          opacity: 1;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .contact-icon {
          color: #22d3ee;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(34, 211, 238, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22d3ee;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: #22d3ee;
          color: rgba(30, 58, 138, 1);
          transform: translateY(-3px);
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 2rem 0 1.5rem;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .footer-copyright {
          color: #9ca3af;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-bottom-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #22d3ee;
        }
      `}</style>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
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
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" size={18} />
                                <span>info@cryptomaster.exchange</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © 2025 CryptoMaster. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#" className="footer-bottom-link">Privacy Policy</a>
                            <a href="#" className="footer-bottom-link">Terms of Service</a>
                            <a href="#" className="footer-bottom-link">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}