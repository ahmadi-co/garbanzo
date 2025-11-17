import React, {useState} from "react";
import './Header.css'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setMobileMenuOpen(false)
    };

    return (
        <>
            <header className="header">
                <div className='container'>
                    <div className="header-container ">

                        <Link
                            to='/'
                            className='header-logo-container'
                        >
                            <img
                                src={require('../../assets/header/logo.png')}
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

                        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
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
                            <HashLink
                                to='/about-us'
                                className="nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About Us
                            </HashLink>
                            <HashLink
                                to='/#services'
                                className="nav-link"
                                onClick={() => setMobileMenuOpen(false)}

                            >
                                Our Services
                            </HashLink>
                            <Link
                                to='/our-cards'
                                className="nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Cards
                            </Link>
                            <HashLink
                                to='/#why-us'
                                className="nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Why Us
                            </HashLink>
                            <Link
                                to='/contact-us'
                                className="nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>

                            <button
                                className="header-login-button"
                                onClick={() => window.location.href = "https://app.iberbanco.finance/sign_up"}
                            >
                                Register
                            </button>

                            <button
                                className="header-login-button"
                                onClick={() => window.location.href = "https://app.iberbanco.finance/login"}
                            >
                                Login
                            </button>
                        </nav>
                    </div>

                </div>
            </header>
        </>
    );
}
