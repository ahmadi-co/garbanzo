import React from 'react';
import './AboutUs.css';

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

    return (
        <section className="about-us" id='about'>
            <div className="about-us-container container">
                {/* Header */}
                <div className="about-us-header">
                    <h2 className="about-us-title">About Crypto Master Exchange</h2>
                </div>

                {/* Statistics */}
                <div className="about-us-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="about-us-stat-card">
                            <div className="about-us-stat-number">{stat.number}</div>
                            <div className="about-us-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Mission Content */}
                <div className="about-us-content">
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
    );
};

export default AboutUs;

