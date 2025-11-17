import React, { useState, useEffect, useRef } from 'react';
import './HeroSlide.css';
import {useNavigate} from "react-router-dom";
import { gsap } from "gsap";

import DynamicDotsBackground from "../../../components/BlobBackground/DynamicDotsBackground";

const HeroSlide = ({slide, isActive}) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isButtonActive, setIsActive] = useState(false);

    // Card-based slide layout
    if (slide.type === 'cards') {
        return (
            <div className="hero-slide hero-slide-cards">
                <div className='hero-slide-cards-container container '>
                    <h1 className="hero-slide-title">
                        Our Cards
                    </h1>

                    <div className='hs-cards-grid'>
                        <div className="hero-section-card">
                            <h1 className="hs-card-title">VIRTUAL CARD</h1>
                            <div className='hero-section-card-info'>
                                <p className='hero-section-card-title'>
                                    Features:
                                </p>
                                <ul className="features-list">
                                    <li className="features-item">Online Purchases</li>
                                    <li className="features-item">$100.000 Monthly Limit</li>
                                    <li className="features-item">Top-up via Crypto</li>
                                    <li className="features-item">Mastercard</li>
                                </ul>
                                <div className='price'>
                                    <span className='number'>FREE</span>
                                </div>
                            </div>
                            <img src={require('../../../assets/hero-section/virtual-card.png')} alt='gold card' className='hs-card hero-section-virtual-card' />
                            <DynamicDotsBackground/>
                        </div>

                        <div className="hero-section-card">
                            <h1 className="hs-card-title">CryptoMaster Card</h1>
                            <div className='hero-section-card-info'>
                                <p className='hero-section-card-title'>
                                    Features:
                                </p>
                                <ul className="features-list">
                                    <li className="features-item">Cashout From ATM</li>
                                    <li className="features-item">$100,000 Monthly limit</li>
                                    <li className="features-item">Top-up via Crypto</li>
                                    <li className="features-item">Mastercard</li>
                                </ul>
                                <div className='price'>
                                    <span className='number'>20</span>
                                    &nbsp;
                                    <span className='currency'>$</span>
                                </div>
                            </div>
                            <img src={require('../../../assets/hero-section/physical-card.png')} alt='gold card' className='hs-card' />
                            <DynamicDotsBackground/>
                        </div>

                        <div className="hero-section-card">
                            <h1 className="hs-card-title">Metal Card</h1>
                            <div className='hero-section-card-info'>
                                <p className='hero-section-card-title'>
                                    Features:
                                </p>
                                <ul className="features-list">
                                    <li className="features-item">24k karat Gold Card</li>
                                    <li className="features-item">$100,000 Monthly limit</li>
                                    <li className="features-item">Top-up via Crypto</li>
                                    <li className="features-item">Mastercard</li>
                                </ul>

                                <div className='price'>
                                    <span className='number'>100</span>
                                    <span className='currency'>$</span>
                                </div>
                            </div>
                            <img src={require('../../../assets/hero-section/gold-card.png')} alt='gold card' className='hs-card' />
                            <DynamicDotsBackground/>
                        </div>

                    </div>

                    <button
                        onClick={()=> navigate('/our-cards')}
                        className={`crypto-button ${isHovered ? 'hover' : ''} ${isButtonActive ? 'active' : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onMouseDown={() => setIsActive(true)}
                        onMouseUp={() => setIsActive(false)}
                    >
                        <div className={`shine ${isHovered ? 'active' : ''}`}></div>
                            Learn More
                        <span className="icon">➔</span>
                    </button>
                </div>
            </div>
        );
    }

    // Money Transfer features slide layout
    if (slide.type === 'transfer') {
        return (
            <div className={`hero-slide hero-slide-transfer  ${isActive ? 'active' : ''}`}>
                <div className='container'>
                    <div className="transfer-wrapper">
                        {/* Left Side - Brand and Main Slogan */}
                        <div className="transfer-content-left">
                            <h1 className="transfer-main-headline">
                                Safe Money Transfer With Low &nbsp;
                                <span className="transfer-highlight">Commission</span>
                            </h1>
                        </div>

                        {/* Middle-Right - Features Box */}
                        <div className="transfer-content-middle">
                            <div className="transfer-features-box">
                                {[
                                    "Send Money to Your Country Easily",
                                    "Hassle-free Low Commission Money Transfer To Your Country",
                                    "Send Money Anywhere in the World"

                                ].map((feature, index) => (
                                    <div key={index} className="transfer-feature-item">
                                        <svg className="transfer-check-icon" width="20" height="20" viewBox="0 0 24 24"
                                             fill="white">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                        </svg>
                                        <span className="transfer-feature-text">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="transfer-tagline">We provide the privilege of sending money with Crypto Master in the easiest way.</p>
                        </div>

                        {/* Right Side - Arrow Graph Placeholder */}
                        <div className="transfer-graph-container">
                            <DynamicDotsBackground/>
                            <img
                                src={require('../../../assets/hero-section/hero-section-01.png')}
                                alt="Arrow Graph"
                                className="transfer-arrow-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ATM-based slide layout
    if (slide.type === 'atm') {
        return (
            <div className={`hero-slide hero-slide-atm  ${isActive ? 'active' : ''}`}>
                <div className='container'>
                    <div className="atm-wrapper">
                        {/* Left Side - Headlines */}
                        <div className="atm-content-left">
                            <h1 className="atm-main-headline">
                                WITHDRAW WITH CRYPTO CARD
                            </h1>
                            <h2 className="atm-sub-headline">
                                PAY EASILY!
                            </h2>
                        </div>

                        {/* Right Side - ATM and Info Boxes */}
                        <div className="atm-content-right">
                            {/* Top Info Box */}
                            <div className="atm-info-box atm-info-box-top">
                                <svg className="atm-play-icon" width="20" height="20" viewBox="0 0 24 24"
                                     fill="#213A80">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                                <p className="atm-info-text">Withdraw money from ATM with your Crypto Card and pay EASILY.</p>
                            </div>

                            <div className='atm-machine-image'>
                                <img
                                    src={require('../../../assets/hero-section/atm-machine.png')}
                                    alt="Arrow Graph"
                                    className="atm-machine-img"
                                />
                            </div>

                            {/* Bottom Info Box */}
                            <div className="atm-info-box atm-info-box-bottom">
                                <p className="atm-info-text"><strong>Need assistance?</strong></p>
                                <p className="atm-info-text">CryptoMaster at Your Service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div  className={` hero-slide  ${isActive ? 'active' : ''}`}>
            {/* Main Content */}
            <div className="banner-content container">
                {/* Left Side - Globe Illustration */}
                <div className="globe-section">
                    <div className="globe-container">
                        <img
                            src={require('../../../assets/hero-section/globe-background.png')} alt="Arrow Graph"
                            className="transfer-graph-image"
                        />

                        {/* Banknotes */}
                        <div className="banknote banknote-1">$</div>
                        <div className="banknote banknote-2">$</div>
                        <div className="banknote banknote-3">$</div>
                    </div>
                </div>

                {/* Center - Headlines */}
                <div className="headlines-section">
                    <h1 className="main-headline">
                        TRANSFER MONEY INTERNATIONALLY SECURELY
                    </h1>
                    <h2 className="banner-sub-headline">
                        WITH YOUR CRYPTOMASTER ACCOUNT!
                    </h2>
                </div>

                {/* Right Side - Crypto Logos */}
                <div className="crypto-section">
                    <div className="crypto-logo ethereum">
                        <img src={require('../../../assets/hero-section/tether.png')} alt="Arrow Graph"
                             className="transfer-graph-image"/>
                    </div>
                    <div className="crypto-logo tether">
                        <img src={require('../../../assets/hero-section/ethereum.png')} alt="Arrow Graph"
                             className="transfer-graph-image"/>
                    </div>
                    <div className="crypto-logo usd">
                        <img src={require('../../../assets/hero-section/usd.png')} alt="Arrow Graph"
                             className="transfer-graph-image"/>
                    </div>
                </div>
            </div>

            {/* Bottom - Payment Network Logos */}
            <div className="payment-networks">
                <div className="payment-logo sepa">
                    <div className="sepa-logo">
                        <img src={require('../../../assets/hero-section/sepa-instant.png')} alt="Arrow Graph"/>
                    </div>
                </div>

                <div className="payment-logo faster-payments">
                    <img src={require('../../../assets/hero-section/fast-payment-logo.png')} alt="Arrow Graph"/>
                </div>

                <div className="payment-logo fedwire">
                    <img src={require('../../../assets/hero-section/fedwire-to-deliver-icon.png')} alt="Arrow Graph"
                         className="transfer-graph-image"/>
                </div>

                <div className="payment-logo swift">
                    <img src={require('../../../assets/hero-section/swift-icon.png')} alt="Arrow Graph"
                         className="transfer-graph-image"/>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;




