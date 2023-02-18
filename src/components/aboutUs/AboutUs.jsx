import React from 'react'
import AboutUsHero from './aboutUsHero/AboutUsHero'
import Navbar from './../Navbar/Navbar';
import AboutTeam from './aboutTeam/AboutTeam';
import OurTeam from './ourTeam/OurTeam';
import AboutUsOurProject from './aboutUsOurProject/AboutUsOurProject';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutUsHero />
            <AboutTeam />
            <AboutUsOurProject />
            <OurTeam />
            <Footer />
        </>
    )
}

export default AboutUs