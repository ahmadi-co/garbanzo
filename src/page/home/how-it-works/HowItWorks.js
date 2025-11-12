import React, { useEffect, useRef } from "react";
import { FaUserCheck, FaLaptop, FaShieldAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HowItWorks.css";
import {useNavigate} from "react-router-dom";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks({ onBecomeClientClick }) {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const stepsRef = useRef([]);
    const ctaRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = onBecomeClientClick || (() => navigate("/contact-us"));


    const steps = [
        {
            title: "Register",
            description: "Sign up and verify your business identity within minutes.",
            icon: <FaUserCheck />,
        },
        {
            title: "Access the Platform",
            description: "Manage exchange and custody services from a single secure dashboard.",
            icon: <FaLaptop />,
        },
        {
            title: "Exchange Securely",
            description: "Enjoy transparent costs and instant settlement.",
            icon: <FaShieldAlt />,
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate entire section
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            // Animate header (title + subtitle)
            gsap.fromTo(
                headerRef.current.children,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            // Animate step cards
            gsap.fromTo(
                stepsRef.current,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // Animate CTA button
            gsap.fromTo(
                ctaRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="how-it-works-container container" ref={sectionRef}>
            <div className="how-it-works-header" ref={headerRef}>
                <h2 className="how-it-works-title">How It Works</h2>
                <p className='how-it-works-description'>
                    Our process is built around simplicity, transparency, and compliance. From registration to transaction, every step is designed to make crypto operations fast, intuitive, and fully regulated.
                </p>
            </div>

            <div className="how-it-works-steps">
                {steps.map((step, index) => (
                    <div
                        className="step-card"
                        key={index}
                        ref={(el) => (stepsRef.current[index] = el)}
                    >
                        <div className="step-icon">{step.icon}</div>
                        <div className="step-content">
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="how-it-works-cta">
                <button  onClick={handleClick} ref={ctaRef}>
                     <span>Contact Us</span> <FiArrowUpRight className='icon' />
                </button>
            </div>
        </section>
    );
}
