import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroSlide from './HeroSlide';
import './HeroSection.css';
import HorizontalWaveBlobs from "../../../components/HorizontalWaveBlobs/HorizontalWaveBlobs";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides] = useState([

        { id: 1,
            leftIcon: "globe",
            rightIcons: ["ethereum", "tether"],
            paymentNetworks: true // true or false
        },
        { id: 2, type: "cards" },
        { id: 3, type: "transfer" },
        { id: 4, type: "atm" },
    ]);

    const totalSlides = slides.length;
    const sliderWrapperRef = useRef(null);

    // Animate slide change using GSAP
    useEffect(() => {
        if (sliderWrapperRef.current) {
            gsap.to(sliderWrapperRef.current, {
                x: `-${currentSlide * 100}%`,
                duration: 0.8,
                ease: 'power2.inOut'
            });
        }
    }, [currentSlide]);

    // Auto-play functionality
    useEffect(() => {
        if (totalSlides <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 6000); // 5 seconds per slide

        return () => clearInterval(interval);
    }, [totalSlides]);

    const goToSlide = (index) => setCurrentSlide(index);
    const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    const goToNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

    return (
        <div className="hero-section" id="home">
            <HorizontalWaveBlobs />

            <svg
                style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none' }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="50" cy="50" r="2" fill="#00ffff"/>
                        <line x1="50" y1="50" x2="100" y2="0" stroke="#00ffff" strokeWidth="0.5"/>
                        <line x1="50" y1="50" x2="100" y2="100" stroke="#00ffff" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#network)" />
            </svg>

            <div className="slider-container">
                <div className="slider-wrapper" ref={sliderWrapperRef}>
                    {slides.map((slide, index) => (
                        <HeroSlide key={slide.id} slide={slide} isActive={index === currentSlide} />
                    ))}
                </div>

                {totalSlides > 1 && (
                    <>
                        <button className="slider-arrow slider-arrow-left" onClick={goToPrevious} aria-label="Previous slide">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                            </svg>
                        </button>
                        <button className="slider-arrow slider-arrow-right" onClick={goToNext} aria-label="Next slide">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                            </svg>
                        </button>
                    </>
                )}

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
