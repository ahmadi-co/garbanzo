import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/header/logo.svg'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        /* Header Styles */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(30, 58, 138, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.75rem;
          font-weight: bold;
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .logo-highlight {
          color: #22d3ee;
        }

        .nav {
          display: none;
        }

        @media (min-width: 768px) {
          .nav {
            display: flex;
            gap: 2rem;
            align-items: center;
          }
        }

        .nav-link {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          cursor: pointer;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #22d3ee;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #22d3ee;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-button {
          display: flex;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          transition: transform 0.3s ease;
        }

        .mobile-menu-button:hover {
          transform: scale(1.1);
        }

        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 75%;
          max-width: 300px;
          height: 100vh;
          background: rgba(30, 58, 138, 0.98);
          backdrop-filter: blur(10px);
          transition: right 0.3s ease;
          padding: 2rem;
          z-index: 1001;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .mobile-menu-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          transition: transform 0.3s ease;
        }

        .close-button:hover {
          transform: rotate(90deg);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 1.125rem;
          font-weight: 500;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .mobile-nav-link:hover {
          color: #22d3ee;
          padding-left: 0.5rem;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .overlay.open {
          opacity: 1;
          visibility: visible;
        }

       
      `}</style>

            {/* Header */}
            <header className="header">
                <div className="header-container">
                    <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                        <img src={logo} className='header-logo' />
                    </a>

                    <nav className="nav">
                        <a className="nav-link" onClick={() => scrollToSection('home')}>Home</a>
                        <a className="nav-link" onClick={() => scrollToSection('why-us')}>Why Us</a>
                        <a className="nav-link" onClick={() => scrollToSection('cards')}>Cards</a>
                        <a className="nav-link" onClick={() => scrollToSection('about')}>About Us</a>
                        <a className="nav-link" onClick={() => scrollToSection('contact')}>Contact Us</a>
                    </nav>

                    <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(true)}>
                        <FaBars size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="mobile-menu-title">Menu</span>
                    <button className="close-button" onClick={() => setMobileMenuOpen(false)}>
                        <FaTimes size={28} />
                    </button>
                </div>
                <nav className="mobile-nav">
                    <a className="mobile-nav-link" onClick={() => scrollToSection('home')}>Home</a>
                    <a className="mobile-nav-link" onClick={() => scrollToSection('why-us')}>Why Us</a>
                    <a className="mobile-nav-link" onClick={() => scrollToSection('cards')}>Cards</a>
                    <a className="mobile-nav-link" onClick={() => scrollToSection('about')}>About Us</a>
                    <a className="mobile-nav-link" onClick={() => scrollToSection('contact')}>Contact Us</a>
                </nav>
            </div>
        </>
    );
}