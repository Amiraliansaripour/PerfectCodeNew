import React from 'react'
import Footer from '../Footer/Footer';
import BlogHero from './blogHero/BlogHero';
import LastestPost from './lastestPost/LastestPost';
import Navbar from './../Navbar/Navbar';

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogHero />
      <LastestPost />
      <Footer />
    </>
  )
}

export default Blog