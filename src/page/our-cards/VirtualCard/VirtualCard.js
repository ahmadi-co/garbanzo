import React, { useState, useEffect } from 'react';
import './VirtualCard.css';

export default function VirtualCard() {
    const [glowAnimation, setGlowAnimation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlowAnimation((prev) => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="virtual-card__wrapper">
            <div
                className='virtual-card'
            >
                {/* Animated gradient background */}
                <div
                    className="virtual-card__animated-bg"
                    style={{
                        background: `linear-gradient(${glowAnimation}deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`,
                    }}
                ></div>

                {/* Grid Pattern */}
                <div className="virtual-card__grid">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={`h${i}`}
                            className="virtual-card__grid-line horizontal"
                            style={{ top: `${i * 5}%` }}
                        ></div>
                    ))}
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={`v${i}`}
                            className="virtual-card__grid-line vertical"
                            style={{ left: `${i * 5}%` }}
                        ></div>
                    ))}
                </div>

                {/* Floating Particles */}
                <div className="virtual-card__particles">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="virtual-card__particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 3}s`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* Card Content */}
                <div className="virtual-card__content">
                    <div className="virtual-card__top">
                        <div className="virtual-card__badge virtual-card__badge--virtual">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="virtual-card__icon"
                            >
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <path
                                    d="M12 6v6l4 2"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            VIRTUAL
                        </div>

                        <div className="virtual-card__badge virtual-card__badge--status">
                            <div
                                className="virtual-card__status-dot"
                            ></div>
                            Active
                        </div>
                    </div>

                    {/* Icon */}
                    <div className="virtual-card__icon-large">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" opacity="0.6" />
                            <path d="M2 10h20" stroke="white" strokeWidth="1.5" opacity="0.6" />
                            <circle cx="6" cy="15" r="1" fill="white" opacity="0.8" />
                            <circle cx="10" cy="15" r="1" fill="white" opacity="0.8" />
                            <circle cx="14" cy="15" r="1" fill="white" opacity="0.8" />
                        </svg>
                    </div>

                    <div className="virtual-card__number">6789 2345 8901 4567</div>

                    <div className="virtual-card__bottom">
                        <div>
                            <div className="virtual-card__label">EXPIRES</div>
                            <div className="virtual-card__value">01/30</div>
                        </div>
                        <div>
                            <div className="virtual-card__label">CVV</div>
                            <div className="virtual-card__value">123</div>
                        </div>
                        <div className="virtual-card__holder">
                            <div className="virtual-card__label">CARDHOLDER</div>
                            <div className="virtual-card__value">FIRSTNAME LASTNAME</div>
                        </div>
                    </div>

                    <div className="virtual-card__network">DIGITAL PAY</div>
                </div>

                <div className="virtual-card__overlay"></div>
            </div>
        </div>
    );
}
