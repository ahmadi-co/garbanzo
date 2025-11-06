import React from 'react';
import './App.css';
import HeroSection from './components/page/hero-section/HeroSection';
import WhyChooseUs from './components/page/why-us/WhyChooseUs';
import OurCards from './components/page/our-cards/OurCards';
import AboutUs from './components/page/about-us/AboutUs';
import ContactUs from './components/page/contat-us/ContactUs';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <>
        <Header/>
        <HeroSection />
        <WhyChooseUs />
        <OurCards />
        <AboutUs />
        <ContactUs />
        <Footer/>
        <ScrollToTopButton/>
    </>
  );
}

export default App;
