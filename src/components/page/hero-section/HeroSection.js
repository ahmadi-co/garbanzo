import React, { useState, useEffect } from 'react';
import HeroSlide from './HeroSlide';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState([
    {
      id: 1,
      mainHeadline: "TRANSFER MONEY INTERNATIONALLY SECURELY",
      subHeadline: "WITH YOUR CRYPTOMASTER ACCOUNT!",
      leftIcon: "globe", // Options: "globe" or null
      rightIcons: ["ethereum", "tether"], // Options: "ethereum", "tether", or empty array []
      paymentNetworks: true // true or false
    },

    {
      id: 3,
      type: "atm", // ATM withdrawal slide
      mainHeadline: "WITHDRAW WITH CRYPTO CARD",
      subHeadline: "PAY EASILY!",
      infoBox1: {
        icon: "play",
        text: "Withdraw money from ATM with your Crypto Card and pay EASILY."
      },
      infoBox2: {
        title: "Need assistance?",
        text: "CryptoMaster at Your Service."
      }
    },
    {
      id: 4,
      type: "transfer", // Money transfer features slide
      mainHeadline: "Safe Money Transfer With Low Commission",
      highlightWord: "Commission",
      features: [
        "Send Money to Your Country Easily",
        "Hassle-free Low Commission Money Transfer To Your Country",
        "Send Money Anywhere in the World"
      ],
      tagline: "We provide the privilege of sending money with Crypto Master in the easiest way."
    }
  ]);

  const totalSlides = slides.length;

  // Auto-play functionality
  useEffect(() => {
    if (totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="hero-section" id='home'>
      {/* Shared Network Lines Background */}
      <svg className="network-svg-bg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="#00ffff" />
            <line x1="50" y1="50" x2="100" y2="0" stroke="#00ffff" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="100" y2="100" stroke="#00ffff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>

      {/* Slider Container */}
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <HeroSlide
              key={slide.id}
              slide={slide}
              isActive={index === currentSlide}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button 
              className="slider-arrow slider-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button 
              className="slider-arrow slider-arrow-right"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;

