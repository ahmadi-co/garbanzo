import React from 'react';
import './PhysicalCard.css';

export default function PhysicalCard() {
    return (
        <div className="physical-card__wrapper">
            <div className="physical-card__front">
                <div className="physical-card__metallic-overlay"></div>

                <svg className="physical-card__pattern" viewBox="0 0 400 250">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4a5568" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#2d3748" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    {[...Array(8)].map((_, i) => (
                        <line key={i} x1={i * 50} y1="0" x2="400" y2={250 - i * 31.25} stroke="url(#grad1)" strokeWidth="0.5" />
                    ))}
                    {[...Array(8)].map((_, i) => (
                        <line key={`v${i}`} x1="0" y1={i * 31.25} x2={400 - i * 50} y2="250" stroke="url(#grad1)" strokeWidth="0.5" />
                    ))}
                </svg>

                <div className="physical-card__content">
                    <div className="physical-card__top">
                        <div className="physical-card__bank-logo">
                            <div className="physical-card__logo-circle">P</div>
                            <div className="physical-card__logo-text">PLATINUM</div>
                        </div>
                        <div className="physical-card__contactless">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6"
                                      stroke="#cbd5e0" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9"
                                      stroke="#cbd5e0" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 12H12.01" stroke="#cbd5e0" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="physical-card__chip-container">
                        <div className="physical-card__chip">
                            <div className="physical-card__chip-inner">
                                <div className="physical-card__chip-pattern">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="physical-card__chip-cell"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="physical-card__number">1234 5678 9012 3456</div>

                    <div className="physical-card__bottom">
                        <div className="physical-card__detail-section">
                            <div className="physical-card__detail-label">VALID THRU</div>
                            <div className="physical-card__detail-value">19/33</div>
                        </div>
                        <div className="physical-card__detail-section physical-card__detail-section--right">
                            <div className="physical-card__detail-label">CARDHOLDER</div>
                            <div className="physical-card__detail-value">FIRSTNAME LASTNAME</div>
                        </div>
                    </div>

                    <div className="physical-card__network-logo">
                        <div className="physical-card__mastercard-circle physical-card__mastercard-circle--red"></div>
                        <div className="physical-card__mastercard-circle physical-card__mastercard-circle--orange"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
