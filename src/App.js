import React from 'react';
import './App.css';
import HeroSection from './components/page/hero-section/HeroSection';
import WhyChooseUs from './components/page/WhyChooseUs';
import OurCards from './components/page/OurCards';
import AboutUs from './components/page/AboutUs';
import ContactUs from './components/page/ContactUs';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhyChooseUs />
      {/*<OurCards />*/}
      {/*<AboutUs />*/}
      {/*<ContactUs />*/}
    </div>
  );
}

export default App;
