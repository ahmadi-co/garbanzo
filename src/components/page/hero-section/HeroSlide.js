import React from 'react';
import './HeroSlide.css';

const HeroSlide = ({ slide, isActive }) => {
  // Money Transfer features slide layout
  if (slide.type === 'transfer') {
    return (
      <div className={`hero-slide hero-slide-transfer  ${isActive ? 'active' : ''}`}>
        <div className='container'>
            <div className="transfer-wrapper">
                {/* Left Side - Brand and Main Slogan */}
                <div className="transfer-content-left">
                    <h1 className="transfer-main-headline">
                        {slide.mainHeadline}
                        <span className="transfer-highlight">{slide.highlightWord}</span>
                    </h1>
                </div>

                {/* Middle-Right - Features Box */}
                <div className="transfer-content-middle">
                    <div className="transfer-features-box">
                        {slide.features && slide.features.map((feature, index) => (
                            <div key={index} className="transfer-feature-item">
                                <svg className="transfer-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                                <span className="transfer-feature-text">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <p className="transfer-tagline">{slide.tagline}</p>
                </div>

                {/* Right Side - Arrow Graph Placeholder */}
                <div className="transfer-content-right">
                    <div className="transfer-graph-container">
                        <img src={require('../../../assets/hero-section/hero-section-01.png')} alt="Arrow Graph" className="transfer-graph-image" />
                    </div>
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
                        {slide.mainHeadline}
                    </h1>
                    <h2 className="atm-sub-headline">
                        {slide.subHeadline}
                    </h2>
                </div>

                {/* Right Side - ATM and Info Boxes */}
                <div className="atm-content-right">
                    {/* Top Info Box */}
                    {slide.infoBox1 && (
                        <div className="atm-info-box atm-info-box-top">
                            {slide.infoBox1.icon === 'play' && (
                                <svg className="atm-play-icon" width="20" height="20" viewBox="0 0 24 24" fill="#213A80">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            )}
                            <p className="atm-info-text">{slide.infoBox1.text}</p>
                        </div>
                    )}

                    {/* Bottom Info Box */}
                    {slide.infoBox2 && (
                        <div className="atm-info-box atm-info-box-bottom">
                            <p className="atm-info-title">{slide.infoBox2.title}</p>
                            <p className="atm-info-text">{slide.infoBox2.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    );
  }

  //   {/* Cards Grid */}
  // // Card-based slide layout
  // if (slide.type === 'cards') {
  //   return (
  //     <div className={`hero-slide hero-slide-cards ${isActive ? 'active' : ''}`}>
  //       <div className="cards-wrapper">
  //
  //         {/* Cards Grid */}
  //         <div className="cards-grid">
  //           {slide.cards && slide.cards.map((card, index) => (
  //             <div
  //               key={card.id}
  //               className="card-wrapper"
  //               style={{
  //                 animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
  //               }}
  //             >
  //               <div className={`card-container card-${card.cardColor}`}>
  //                 {/* Badge */}
  //                 {card.badge && (
  //                   <div className={`card-badge badge-${card.cardColor}`}>
  //                     {card.badge}
  //                   </div>
  //                 )}
  //
  //                 {/* Title */}
  //                 <div className="card-header-section">
  //                   <h2 className="card-header-title">{card.title}</h2>
  //                   {card.subtitle && (
  //                     <p className="card-header-subtitle">{card.subtitle}</p>
  //                   )}
  //                 </div>
  //
  //                 {/* Features */}
  //                 <div className="card-features-section">
  //                   <p className="card-features-label">Features:</p>
  //                   <ul className="card-features-list">
  //                     {card.features.map((feature, fIndex) => (
  //                       <li key={fIndex} className="card-feature-item">
  //                         <span className="card-feature-bullet">•</span>
  //                         {feature}
  //                       </li>
  //                     ))}
  //                   </ul>
  //                 </div>
  //
  //                 {/* Price */}
  //                 <div className="card-price-section">
  //                   <div className="card-price-container">
  //                     <span className={`card-price-value price-${card.cardColor}`}>
  //                       {card.price}
  //                     </span>
  //                     {card.currency && (
  //                       <span className={`card-price-currency currency-${card.cardColor}`}>
  //                         {card.currency}
  //                       </span>
  //                     )}
  //                   </div>
  //                 </div>
  //
  //                 {/* Card Preview */}
  //                 <div className="card-preview-section">
  //                   <div className={`card-preview card-preview-${card.cardColor}`}>
  //                     <div className="card-preview-header">
  //                       <div className="card-preview-chip"></div>
  //                       <svg className="card-preview-shield" width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.6">
  //                         <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  //                       </svg>
  //                     </div>
  //                     <div className="card-preview-lines">
  //                       <div className="card-preview-line card-preview-line-1"></div>
  //                       <div className="card-preview-line card-preview-line-2"></div>
  //                     </div>
  //                     <div className="card-preview-footer">
  //                       <p className="card-preview-label">
  //                         {card.title.includes('VIRTUAL') ? 'VIRTUAL CARD' : 'CRYPTO CARD'}
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </div>
  //
  //                 {/* CTA Button */}
  //                 <button className={`card-cta-button cta-${card.cardColor}`}>
  //                   Get Started
  //                 </button>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // Original banner-style slide layout
  return (
    <div className={` hero-slide  ${isActive ? 'active' : ''}`}>
      {/* Main Content */}
      <div className="banner-content container">
        {/* Left Side - Globe Illustration */}
        {slide.leftIcon === 'globe' && (
          <div className="globe-section">
            <div className="globe-container">
                <img src={require('../../../assets/hero-section/globe-background.png')} alt="Arrow Graph" className="transfer-graph-image" />

              {/* Banknotes */}
              <div className="banknote banknote-1">$</div>
              <div className="banknote banknote-2">$</div>
              <div className="banknote banknote-3">$</div>
            </div>
          </div>
        )}

        {/* Center - Headlines */}
        <div className="headlines-section">
          <h1 className="main-headline">
            {slide.mainHeadline}
          </h1>
          <h2 className="sub-headline">
            {slide.subHeadline}
          </h2>
        </div>

        {/* Right Side - Crypto Logos */}
        {slide.rightIcons && slide.rightIcons.length > 0 && (
          <div className="crypto-section">
            {slide.rightIcons.includes('ethereum') && (
              <div className="crypto-logo ethereum">
                  <img src={require('../../../assets/hero-section/tether.png')} alt="Arrow Graph" className="transfer-graph-image" />
              </div>
            )}
            {slide.rightIcons.includes('tether') && (
              <div className="crypto-logo tether">
                  <img src={require('../../../assets/hero-section/ethereum.png')} alt="Arrow Graph" className="transfer-graph-image" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom - Payment Network Logos */}
      {slide.paymentNetworks && (
        <div className="payment-networks">
          <div className="payment-logo sepa">
            <div className="sepa-logo">
                <img src={require('../../../assets/hero-section/sepa-instant.png')} alt="Arrow Graph" />
            </div>
          </div>

          <div className="payment-logo faster-payments">
              <img src={require('../../../assets/hero-section/fast-payment-logo.png')} alt="Arrow Graph" />
          </div>

          <div className="payment-logo fedwire">
              <img src={require('../../../assets/hero-section/fedwire-to-deliver-icon.png')} alt="Arrow Graph" className="transfer-graph-image" />
          </div>

          <div className="payment-logo swift">
              <img src={require('../../../assets/hero-section/swift-icon.png')} alt="Arrow Graph" className="transfer-graph-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlide;

