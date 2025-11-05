import React from 'react';
import './App.css';
import HeroSection from './components/page/hero-section/HeroSection';
import WhyChooseUs from './components/page/WhyChooseUs';
import OurCards from './components/page/OurCards';
import AboutUs from './components/page/AboutUs';
import ContactUs from './components/page/ContactUs';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
    </>
  );
}

export default App;
