import React from 'react'
import Hero from './Hero/Hero'
import Guide from './Guide/Guide'
import Services from './Services/Services'
import Social from './Social/Social'
import Samples from './Samples/Samples'
import Footer from '../Footer/Footer'
import FullBanner from '../FullBanner/FullBanner'

const Home = () => {
  return (
    <>
    <Hero />
    <Social />
    <Services />
    <Guide />
    <Samples />
    <FullBanner />
    <Footer/>
    </>
  )
}

export default Home