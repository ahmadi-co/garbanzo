import React, {useEffect, useState} from "react";
import './Header.css'
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/header/logo.png";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <header className="header">
                <div className="header-container container">

                    <Link
                        to='/'
                        className='logo'
                        >
                        <img
                            src={logo}
                            className="header-logo"
                            alt="Logo"
                        />
                    </Link>


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

                        <Link to='/#home' className="nav-link" onClick={scrollToTop} >
                            Home
                        </Link>
                        <HashLink to='/#why-us' className="nav-link" >
                            Why Us
                        </HashLink>
                        <Link to='/cards' className="nav-link">
                            Cards
                        </Link>

                        <HashLink to='/#about' className="nav-link" >
                            About Us
                        </HashLink>
                        <Link to='/contact' className="nav-link" >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}
