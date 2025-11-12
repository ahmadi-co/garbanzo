import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VerticalWaveBlobs from "../../components/VerticalWaveBlobs/VerticalWaveBlobs";
import HeroSection from "../../components/HeroSection/HeroSection";
import {useNavigate} from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const stats = [
        {
            number: "2019+",
            label: "Founded"
        },
        {
            number: "150++",
            label: "Countries Covered"
        },
        {
            number: "99.9+",
            label: "Uptime"
        }
    ];

    const headerRef = useRef(null);
    const statsRef = useRef([]);
    const contentRef = useRef(null);
    const navigate = useNavigate();

    // Animate section header
    useEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 90%",
                    },
                }
            );
        }
    }, []);

    // Animate stats cards
    useEffect(() => {
        statsRef.current.forEach((card, i) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { opacity: 0, scale: 0.8, y: 60 },
                    {
                        opacity: 1,
                        scale: 1,
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

    // Animate mission/description text
    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current.querySelectorAll("p"),
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 85%",
                    },
                }
            );
        }
    }, []);


    return (
        <main className='main'>
            <VerticalWaveBlobs/>
            <HeroSection
                title="<span style='color:#00ffff'>Empowering Global Growth</span> Through Private Banking and Financial Innovation"
                subtitle='At Crypto Master, we help clients navigate the world of offshore banking, wealth management, and international investments with confidence and discretion.'
                primaryButtonText='Contact Us'
                onPrimaryButtonClick={()=> navigate('/contact-us')}
                secondaryButtonText='Our Cards'
                onSecondaryButtonClick={()=> navigate('/our-cards')}
                />
            <section className="about-us" id='about'>
                <div className="about-us-container container">
                    {/* Header */}
                    <div className="about-us-header" ref={headerRef}>
                        <h2 className="about-us-title">About Crypto Master Exchange</h2>
                    </div>

                    {/* Statistics */}
                    <div className="about-us-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="about-us-stat-card"
                                 ref={contentRef}
                            >
                                <div className="about-us-stat-number">{stat.number}</div>
                                <div className="about-us-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Mission Content */}
                    <div className="about-us-content" ref={contentRef}>
                        <p className="about-us-description">
                            We are a team of experts in financial technology and cryptocurrencies who believe in the future
                            of decentralized money.
                        </p>
                        <p className="about-us-mission">
                            Our mission is to make cryptocurrencies accessible for everyday use by providing secure and
                            convenient tools for spending them in the real world.
                        </p>
                    </div>
                </div>


            </section>
        </main>
    );
};

export default AboutUs;

