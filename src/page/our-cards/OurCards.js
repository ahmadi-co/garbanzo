import React, {useEffect, useState, useRef} from 'react';
import './OurCards.css';
import PhysicalCard from "./PhysicaCard/PhysicalCard";
import GoldCard from "./GoldCard/GoldCard";
import VirtualCard from "./VirtualCard/VirtualCard";
import VerticalWaveBlobs from "../../components/VerticalWaveBlobs/VerticalWaveBlobs";
import HeroSection from "../../components/HeroSection/HeroSection";
import {useNavigate} from "react-router-dom";


const OurCards = () => {
    const cards = [
        {
            id: "gold",
            title: "GOLD CARD",
            features: [
                "$100,000 monthly limit",
                "Metal-crafted premium card",
                "Low-cost money transfers"
            ],
            price: "X",
            currency: "$",
            card: GoldCard,
            cardColor: "gold",
        },
        {
            id: "physical",
            title: "PHYSICAL CARD",
            features: [
                "$100,000 monthly limit",
                "Low-cost money transfers"
            ],
            price: "20",
            currency: "$",
            card: PhysicalCard,
            cardColor: "blue",
        },
        {
            id: "virtual",
            title: "VIRTUAL CARD",
            features: [
                "$100,000 monthly limit",
                "Low-cost money transfers"
            ],
            price: "FREE",
            currency: "",
            card: VirtualCard,
            cardColor: "gray",
        }
    ];

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate()

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
                            <div key={card.id} className="our-card-wrapper">
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
                                                <span className={`our-card-price-currency currency-${card.cardColor}`}>
                                                    {card.currency}
                                                </span>
                                                    <span className={`our-card-price-value price-${card.cardColor}`}>
                                                    {card.price}
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
                                    <button className={`our-card-cta-button cta-${card.cardColor}`}>
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

