import React, { useState } from 'react';
import './ContactUs.css';

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

  return (
    <section className="contact-us">
      <div className="contact-us-container">
        {/* Header */}
        <div className="contact-us-header">
          <h2 className="contact-us-title">Contact Us</h2>
          <p className="contact-us-subtitle">
            Get in touch with us. We're here to help you with any questions or concerns.
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-us-form-wrapper">
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
            <button type="submit" className="contact-form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

