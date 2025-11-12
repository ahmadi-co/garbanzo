import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSection.css";

export default function HeroSection({
                                        title,
                                        subtitle,
                                        backgroundImage,
                                        primaryButtonText,
                                        secondaryButtonText,
                                        onPrimaryButtonClick,
                                        onSecondaryButtonClick,
                                    }) {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const bgRef = useRef(null);
    const scrollIndicatorRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background subtle zoom
            gsap.fromTo(
                bgRef.current,
                { scale: 1.1 },
                {
                    scale: 1,
                    duration: 2.5,
                    ease: "power3.out",
                }
            );

            // Title animation
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
            );

            // Subtitle animation
            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
            );

            // Buttons animation (staggered)
            gsap.fromTo(
                buttonsRef.current.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    delay: 0.8,
                }
            );

            // Scroll indicator bounce animation
            gsap.to(scrollIndicatorRef.current, {
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 1,
                ease: "power1.inOut",
                delay: 2,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="hero-container" ref={heroRef}>
            {/* Background */}
            <div
                className="hero-background"
                ref={bgRef}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="hero-overlay"></div>
            </div>

            {/* SVG Mesh */}
            <svg
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0.08,
                    pointerEvents: "none",
                }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="mesh" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                        <path
                            d="M0 60 L60 0 L120 60 L60 120 Z"
                            fill="none"
                            stroke="#00ffff"
                            strokeWidth="0.5"
                        />
                        <circle cx="60" cy="60" r="1.5" fill="#00ffff" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mesh)" />
            </svg>

            {/* Main Content */}
            <div className="hero-content container">
                <h1
                    className="hero-title"
                    ref={titleRef}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p className="hero-subtitle" ref={subtitleRef}>
                    {subtitle}
                </p>

                <div className="hero-buttons" ref={buttonsRef}>
                    {primaryButtonText && (
                        <button className="btn btn-primary" onClick={onPrimaryButtonClick}>
                            <span className="text">{primaryButtonText}</span>
                            <span className="svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="20"
                                    viewBox="0 0 38 15"
                                    fill="none"
                                >
                                    <path
                                        fill="white"
                                        d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    )}
                    {secondaryButtonText && (
                        <button className="btn btn-secondary" onClick={onSecondaryButtonClick}>
                            {secondaryButtonText}
                        </button>
                    )}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="scroll-indicator"
                ref={scrollIndicatorRef}
                onClick={() =>
                    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
                }
            >
                <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
}
