import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import OurCards from './page/our-cards/OurCards';
import ContactUs from './page/contat-us/ContactUs';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Home from "./page/home/Home";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route
                path="/"
                element={
                    <Home/>
                }
            />

            <Route path='/cards' element={<OurCards/>} />
            <Route path='/contact' element={<ContactUs/>} />
        </Routes>

        <Footer/>
        <ScrollToTop/>
        <ScrollToTopButton/>
    </BrowserRouter>
  );
}

export default App;
