import React, {useEffect, useState, useRef} from 'react';
import './OurCards.css';
import PhysicalCard from "./PhysicaCard/PhysicalCard";
import GoldCard from "./GoldCard/GoldCard";
import VirtualCard from "./VirtualCard/VirtualCard";
import VerticalWaveBlobs from "../../components/VerticalWaveBlobs/VerticalWaveBlobs";
import HeroSection from "../../components/HeroSection/HeroSection";
import {useNavigate} from "react-router-dom";
import { gsap } from 'gsap';


const OurCards = () => {
    const cardsRef = useRef([]);
    const navigate = useNavigate()

    const cards = [
        {
            id: "virtual",
            title: "VIRTUAL CARD",
            features: [
                "Online Purchases",
                "$100,000 monthly limit",
                "Top-up via Crypto - Mastercard"
            ],
            price: "FREE",
            currency: "",
            card: VirtualCard,
            cardColor: "pink",
        },
        {
            id: "CryptoMaster-Card",
            title: "CryptoMaster Card",
            features: [
                "Cashout From ATM",
                "$100,000 monthly limit",
                "Top-up via Crypto - Mastercard"
            ],
            price: "20",
            currency: "$",
            card: PhysicalCard,
            cardColor: "blue",
        },
        {
            id: "gold",
            title: "Metal Card",
            features: [
                "24k karat Gold Card",
                "$100,000 Monthly limit",
                "Top-up via Crypto - Mastercard"
            ],
            price: "300",
            currency: "$",
            card: GoldCard,
            cardColor: "gray",
        },

    ];

    // Animate cards on scroll
    useEffect(() => {
        cardsRef.current.forEach((card, i) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: i * 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        },
                    }
                );
            }
        });
    }, []);

    // Add button hover scaling
    useEffect(() => {
        const buttons = document.querySelectorAll(".our-card-cta-button");
        buttons.forEach((btn) => {
            btn.addEventListener("mouseenter", () => {
                gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power1.out" });
            });
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
            });
        });
    }, []);

    return (
        <main className='main'>
            <VerticalWaveBlobs/>
            <HeroSection
                title="<span style='color:#00ffff'>Our Cards — </span>Choose the Perfect Fit for Your Lifestyle"
                subtitle="
                Experience premium banking freedom with our range of cards designed for every need — from luxury payments to digital convenience.
                "
                primaryButtonText="Contact Us"
                secondaryButtonText='About Us'
                onPrimaryButtonClick={() => navigate('/contact-us')}
                onSecondaryButtonClick={() => navigate('/about-us')}
            />
            <section className="our-cards section" id='cards'>
                <div className="our-cards-container container">
                    {/* Header */}
                    <div className="our-cards-header">
                        <h2 className="our-cards-title">Explore Our Card Range</h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="our-cards-grid">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                className="our-card-wrapper"
                                ref={(el) => (cardsRef.current[index] = el)}
                            >
                                <div className={`our-card our-card-${card.cardColor}`}>
                                    {/* Title */}
                                    <h3 className="our-card-title">{card.title}</h3>

                                    {/* Features */}
                                    <div className="our-card-features">
                                        <p className="our-card-features-label">Features:</p>
                                        <ul className="our-card-features-list">
                                            {card.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="our-card-feature-item">
                                                    <span className="our-card-feature-bullet">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Price */}
                                    <div className="our-card-price-section">
                                        <span className="our-card-price-label">Price:</span>
                                        <div className="our-card-price-container">
                                            {card.price === "FREE" ? (
                                                <span className={`our-card-price-value price-${card.cardColor} price-free`}>
                                                    {card.price}
                                                </span>
                                            ) : (
                                                <>
                                                    <span className={`our-card-price-value price-${card.cardColor}`}>
                                                        {card.price}
                                                    </span>

                                                    <span className={`our-card-price-currency currency-${card.cardColor}`}>
                                                        {card.currency}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {
                                        card.card &&
                                        <div className='card-container'>
                                            <card.card/>
                                        </div>
                                    }

                                    {/* CTA Button */}
                                    <button
                                        className={`our-card-cta-button cta-${card.cardColor}`}
                                        onClick={() => window.location.href = "https://app.iberbanco.finance/sign_up"}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OurCards;

