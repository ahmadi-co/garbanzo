import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Maximum Security",
      description: "Your funds are protected with military-grade encryption and multi-layer security systems, ensuring complete safety."
    },
    {
      number: "02",
      title: "Instant Transactions",
      description: "Experience real-time crypto-to-fiat conversions for seamless payments and withdrawals anytime, anywhere."
    },
    {
      number: "03",
      title: "Global Coverage",
      description: "Use your card worldwide — accepted wherever Visa or Mastercard operates."
    },
    {
      number: "04",
      title: "Low Fees",
      description: "Enjoy transparent pricing with minimal transaction and card maintenance fees, helping you save more."
    },
    {
      number: "05",
      title: "Mobile App",
      description: "Stay in control with our intuitive mobile app, offering full management of your card, balances, and transactions."
    },
    {
      number: "06",
      title: "KYC in 5 Minutes",
      description: "Complete identity verification in just minutes and get your virtual card instantly."
    }
  ];

  return (
    <section className="why-choose-us" id='why-us'>
      <div className="why-choose-us-container">
        {/* Header */}
        <div className="why-choose-us-header">
          <h2 className="why-choose-us-title">Why Choose Us</h2>
          <p className="why-choose-us-subtitle">
            We provide the most secure, fast, and convenient way to manage your cryptocurrencies anywhere in the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="why-choose-us-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-choose-us-card">
              <div className="why-choose-us-number">{feature.number}</div>
              <h3 className="why-choose-us-card-title">{feature.title}</h3>
              <p className="why-choose-us-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

