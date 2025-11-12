import React from 'react';
import './home.css'
import HeroSection from "./hero-section/HeroSection";
import VerticalWaveBlobs from "../../components/VerticalWaveBlobs/VerticalWaveBlobs";
import WhyChooseUs from "../why-us/WhyChooseUs";
import AboutUs from "../about-us/AboutUs";
import HowItWorks from "./how-it-works/HowItWorks";
import Services from "./services/services";

function Home () {
    return (
        <>
            <HeroSection id='#home' />
            <main className='main'>
                <div >
                    <VerticalWaveBlobs/>
                    <Services/>
                    <WhyChooseUs />
                    <HowItWorks/>
                </div>
            </main>
        </>
    )
}

export default Home;


