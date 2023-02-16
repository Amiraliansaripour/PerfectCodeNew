import React from 'react'
import AboutUsHero from './aboutUsHero/AboutUsHero'
import Navbar from './../Navbar/Navbar';
import AboutTeam from './aboutTeam/AboutTeam';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutUsHero />
            <AboutTeam />
        </>
    )
}

export default AboutUs