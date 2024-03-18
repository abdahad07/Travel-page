import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../Cards/Cards.js';
import Footer from '../Footer/Footer.js';

function Home(){
    return(
        <>
        <HeroSection/>
        <Cards/>
        <Footer/>
        </>
    );
};
export default Home