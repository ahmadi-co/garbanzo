import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/header/logo.svg";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <style>{`
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

        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: #e5e7eb;
          text-decoration: none;
          font-size: var(--normal-font-size);
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
          display: none;
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

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }

          .nav {
            position: fixed;
            top: 0;
            right: ${mobileMenuOpen ? "0" : "-100%"};
            flex-direction: column;
            background: rgba(30, 58, 138, 0.98);
            height: 100vh;
            width: 75%;
            max-width: 300px;
            padding: 2rem;
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
            z-index: 1001;
          }

          .nav-link {
            font-size: 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
            padding: 1rem 0;
          }

          .close-button {
            display: block;
            align-self: flex-end;
            background: none;
            border: none;
            color: white;
            margin-bottom: 2rem;
            cursor: pointer;
          }
        }
      `}</style>

            <header className="header">
                <div className="header-container container">
                    <a
                        href="#home"
                        className="logo"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("home");
                        }}
                    >
                        <img src={logo} className="header-logo" alt="Logo" />
                    </a>

                    <button
                        className="mobile-menu-button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>

                    <nav className="nav">
                        {mobileMenuOpen && (
                            <button
                                className="close-button"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <FaTimes size={28} />
                            </button>
                        )}

                        <a className="nav-link" onClick={() => scrollToSection("home")}>
                            Home
                        </a>
                        <a className="nav-link" onClick={() => scrollToSection("why-us")}>
                            Why Us
                        </a>
                        <a className="nav-link" onClick={() => scrollToSection("cards")}>
                            Cards
                        </a>
                        <a className="nav-link" onClick={() => scrollToSection("about")}>
                            About Us
                        </a>
                        <a className="nav-link" onClick={() => scrollToSection("contact")}>
                            Contact Us
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
}
