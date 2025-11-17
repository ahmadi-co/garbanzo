import React from 'react';
import './GoldCard.css';

export default function GoldCard() {
    return (
        <div className="gold-card__wrapper">
            <div className="gold-card">
                {/* Dot Pattern */}
                <svg className="gold-card__dots" viewBox="0 0 400 250">
                    {[...Array(30)].map((_, i) =>
                        [...Array(50)].map((_, j) => (
                            <circle
                                key={`${i}-${j}`}
                                cx={j * 8}
                                cy={i * 8}
                                r={Math.random() > 0.7 ? 1.5 : 0}
                                fill="#666666"
                                opacity="0.3"
                            />
                        ))
                    )}
                </svg>

                {/* Content */}
                <div className="gold-card__content">
                    <div className="gold-card__top">
                        <div>
                            <div className="gold-card__label">CREDIT CARD</div>
                            <div className="gold-card__braille">
                                {[...Array(6)].map((_, i) => (
                                    <span key={i} className="gold-card__dot"></span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="gold-card__chip">
                        <div className="gold-card__chip-grid">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="gold-card__chip-square"></div>
                            ))}
                        </div>
                    </div>

                    <div className="gold-card__number">4215 3155 0372 5498</div>

                    <div className="gold-card__bottom">
                        <div>
                            <div className="gold-card__small-label">VALID THRU</div>
                            <div className="gold-card__value">01/19</div>
                        </div>
                        <div className="gold-card__name">
                            <div className="gold-card__small-label">CARDHOLDER</div>
                            <div className="gold-card__value">FIRSTNAME LASTNAME</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
