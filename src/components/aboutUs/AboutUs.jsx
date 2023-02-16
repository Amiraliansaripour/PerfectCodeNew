import React from 'react'
import AboutUsHero from './aboutUsHero/AboutUsHero'
import Navbar from './../Navbar/Navbar';
import AboutTeam from './aboutTeam/AboutTeam';
import OurTeam from './ourTeam/OurTeam';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutUsHero />
            <AboutTeam />
            <OurTeam />
        </>
    )
}

export default AboutUs