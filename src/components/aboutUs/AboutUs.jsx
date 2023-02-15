import React from 'react'
import AboutUsHero from './aboutUsHero/AboutUsHero'
import Navbar from './../Navbar/Navbar';
import OurTeam from './ourTeam/OurTeam';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutUsHero />
            <OurTeam />
        </>
    )
}

export default AboutUs