import React from 'react';
import './CryptoMasterBanner.css';

const CryptoMasterBanner = () => {
  return (
    <div className="crypto-master-banner">
      {/* Network Lines Background */}
      <div className="network-lines"></div>

      {/* Main Content */}
      <div className="banner-content">
        {/* Left Side - Globe Illustration */}
        <div className="globe-section">
          <div className="globe-container">
            <svg className="globe" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              {/* Globe background */}
              <circle cx="100" cy="100" r="90" fill="#4a90e2" />
              {/* Simplified continents */}
              <path d="M 50 80 Q 60 60 80 70 Q 100 75 120 70 Q 140 60 150 80" fill="#1a4a7a" />
              <path d="M 40 120 Q 50 100 70 110 Q 90 115 110 110 Q 130 100 140 120" fill="#1a4a7a" />
              <path d="M 120 50 Q 140 40 160 50 Q 170 65 165 80 Q 160 90 150 85" fill="#1a4a7a" />
            </svg>
            
            {/* Location Pins */}
            <div className="location-pin pin-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a4a7a">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="location-pin pin-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a4a7a">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="location-pin pin-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a4a7a">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            
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
          <h2 className="sub-headline">
            WITH YOUR CRYPTOMASTER ACCOUNT!
          </h2>
        </div>

        {/* Right Side - Crypto Logos */}
        <div className="crypto-section">
          <div className="crypto-logo ethereum">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
              {/* Ethereum diamond symbol */}
              <polygon points="12,2 2,12 12,9 22,12" />
              <polygon points="12,9 2,12 12,22 22,12" />
            </svg>
          </div>
          <div className="crypto-logo tether">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
              {/* Tether symbol - T with horizontal line */}
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="none" stroke="white" strokeWidth="2"/>
              <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom - Payment Network Logos */}
      <div className="payment-networks">
        <div className="payment-logo sepa">
          <div className="sepa-logo">
            <span className="sepa-text">SEPA</span>
            <span className="sepa-instant">instant</span>
          </div>
        </div>
        
        <div className="payment-logo faster-payments">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#4a90e2">
            <path d="M8 12l4 4 8-8"/>
          </svg>
          <span>Faster Payments</span>
        </div>
        
        <div className="payment-logo fedwire">
          <div className="fedwire-logo">
            <svg width="40" height="30" viewBox="0 0 24 24" fill="#4a90e2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="fedwire-tagline">Wired to deliver</span>
          </div>
        </div>
        
        <div className="payment-logo swift">
          <div className="swift-logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#808080">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2L2 12l10 10 10-10L12 2z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <span>SWIFT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoMasterBanner;

