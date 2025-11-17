import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ContactUs.css';
import VerticalWaveBlobs from "../../components/VerticalWaveBlobs/VerticalWaveBlobs";
import DynamicDotsBackground from "../../components/BlobBackground/DynamicDotsBackground";
import {FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp} from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            additionalInfo: ''
        });
    };

    // GSAP Refs
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const imageRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

            // Header
            tl.from(headerRef.current, { autoAlpha: 0, y: -40 });

            // Image
            tl.from(imageRef.current, { autoAlpha: 0, scale: 0.95, duration: 1 }, "-=0.4");

            // Form fields
            const formGroups = formRef.current.querySelectorAll('.contact-form-group');
            tl.from(formGroups, { autoAlpha: 0, y: 30, stagger: 0.15 }, "-=0.3");

            // Submit Button (with autoAlpha ensures it becomes visible)
            if (buttonRef.current) {
                tl.from(buttonRef.current, { autoAlpha: 0, y: 20, scale: 0.98, duration: 0.6 }, "+=0.2");
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMail = () => {
        window.location.href = 'mailto:info@cryptomaster.exchange';
    };

    const handlePhone = () => {
        window.open('tel:+905488586787', '_blank');
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/+905391030760', '_blank');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <main className='main'>
            <VerticalWaveBlobs/>
            <section className="contact-us section" id='contact'>
                <div className="contact-us-container container">
                    <div className='contact-us-info'>
                        <DynamicDotsBackground/>
                        {/* Header */}
                        <div className="contact-us-header" ref={headerRef}>
                            <h2 className="contact-us-title">Contact Us</h2>
                            <p className="contact-us-subtitle">
                                Get in touch with us. We're here to help you with any questions or concerns.
                            </p>
                        </div>


                        {/* Contact Info */}
                        <div className="contact-us-details">
                            <div className="contact-us-item" onClick={handleMail}>
                                <FaMapMarkerAlt className="contact-icon" size={20} />
                                <span>
                                    Semih Sancar Caddesi, Ersin Dikerman Dükkanları No: 4 Girne, KKTC
                                </span>
                            </div>
                            <div className="contact-us-item" onClick={handleMail}>
                                <FaEnvelope className="contact-icon" size={20} />
                                <span>info@cryptomaster.exchange</span>
                            </div>
                            <div className="contact-us-item" onClick={handlePhone}>
                                <FaPhone className="contact-icon" size={20} />
                                <span>+90 548 858 67 87</span>
                            </div>

                            <div className="contact-us-item" onClick={handleWhatsApp}>
                                <FaWhatsapp className="contact-icon" size={20} />
                                <span>+90 539 103 07 60</span>
                            </div>
                        </div>

                        <img
                            src={require('../../assets/contact-us/image-01.ppng.png')}
                            alt={'Contact Us'}
                            className='contact-us-img'
                            ref={imageRef}
                        />
                    </div>

                    {/* Contact Form */}
                    <div className="contact-us-form-wrapper" ref={formRef}>
                        <form className="contact-us-form" onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div className="contact-form-group">
                                <label htmlFor="name" className="contact-form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="contact-form-input"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="contact-form-group">
                                <label htmlFor="email" className="contact-form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="contact-form-input"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            {/* Phone Number Field */}
                            <div className="contact-form-group">
                                <label htmlFor="phone" className="contact-form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="contact-form-input"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* Additional Information Field */}
                            <div className="contact-form-group">
                                <label htmlFor="additionalInfo" className="contact-form-label">
                                    Additional Information
                                </label>
                                <textarea
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    className="contact-form-textarea"
                                    placeholder="Tell us more about your inquiry..."
                                    rows="6"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="contact-form-group">
                                <button type="submit" className="contact-form-submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUs;
