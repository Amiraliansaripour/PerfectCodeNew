import React from 'react'
import AboutUsHero from './aboutUsHero/AboutUsHero'
import Navbar from './../Navbar/Navbar';
import AboutTeam from './aboutTeam/AboutTeam';
import OurTeam from './ourTeam/OurTeam';
import AboutUsOurProject from './aboutUsOurProject/AboutUsOurProject';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutUsHero />
            <AboutTeam />
            <AboutUsOurProject />
            <OurTeam />
        </>
    )
}

export default AboutUs