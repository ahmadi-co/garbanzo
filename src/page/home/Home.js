import React from 'react';
import './home.css'
import HeroSection from "../hero-section/HeroSection";
import VerticalWaveBlobs from "../../components/VerticalWaveBlobs/VerticalWaveBlobs";
import WhyChooseUs from "../why-us/WhyChooseUs";
import AboutUs from "../about-us/AboutUs";

function Home () {
    return (
        <>
            <HeroSection id='#home' />
            <main className='main'>
                <div >
                    <VerticalWaveBlobs/>
                    <WhyChooseUs />
                    <AboutUs />
                </div>
            </main>
        </>
    )
}

export default Home;