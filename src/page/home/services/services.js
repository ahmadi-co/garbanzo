import React, { useEffect, useRef } from 'react';
import './services.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRepeat, FaArrowLeft, FaLock } from "react-icons/fa6";
import { MdCurrencyExchange } from "react-icons/md";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const cardsRef = useRef([]);

    const services = [
        {
            icon: <FaRepeat className="service-icon" />,
            title: "EXCHANGE CRYPTO TO FUNDS AND BACK",
            description: "Fast conversions between digital assets and fiat currencies."
        },
        {
            icon: <FaArrowLeft className="service-icon" />,
            title: "TOPUP CARD WITH CRPTO",
            description: "Quickly and securely top up your card using cryptocurrency for easy spending anywhere."
        },
        {
            icon: <FaLock className="service-icon" />,
            title: "CUSTODY & ADMINISTRATION OF CRYPTO-ASSETS",
            description: "Secure management of your digital assets under CySEC supervision."
        },
        {
            icon: <MdCurrencyExchange className="service-icon" />,
            title: "TRANSFER SERVICES FOR CRYPTO-ASSETS",
            description: "Send and receive crypto-assets safely and efficiently — compliant and traceable."
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left section animation
            gsap.fromTo(
                leftRef.current,
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );

            // Animate service cards one by one
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    stagger: 0.25, // one-by-one effect
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="services-container container" id="services" ref={sectionRef}>
            {/* Left Section */}
            <div className="left-section" ref={leftRef}>
                <h1 className="service-title">OUR SERVICES</h1>
                <p className="service-subtitle">
                    At Collect&Exchange CY, we provide a full ecosystem for businesses working with digital and
                    other assets. Every service is built on regulatory transparency, security, and operational efficiency,
                    enabling companies to manage crypto confidently in a compliant environment.
                </p>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        <div className="service-header">
                            <div className="icon-wrapper">{service.icon}</div>
                            <div>
                                <h3 className="service-card-title">{service.title}</h3>
                            </div>
                        </div>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
