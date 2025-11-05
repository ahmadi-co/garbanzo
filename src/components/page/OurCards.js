import React from 'react';
import './OurCards.css';

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
      cardColor: "gray",
    }
  ];

  return (
    <section className="our-cards section" id='cards'>
      <div className="our-cards-container container">
        {/* Header */}
        <div className="our-cards-header">
          <h2 className="our-cards-title">Our Cards</h2>
        </div>

        {/* Cards Grid */}
        <div className="our-cards-grid">
          {cards.map((card, index) => (
            <div key={card.id} className="our-card-wrapper">
              <div className={`our-card our-card-${card.cardColor}`}>
                {/* Badge */}
                {card.badge && (
                  <div className={`our-card-badge badge-${card.cardColor}`}>
                    {card.badge}
                  </div>
                )}

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
  );
};

export default OurCards;

