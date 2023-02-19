import React from 'react'
import Footer from '../Footer/Footer';
import BlogHero from './blogHero/BlogHero';
import LastestPost from './lastestPost/LastestPost';
import Navbar from './../Navbar/Navbar';
import Divider from './Divider';

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogHero />
      <Divider />
      <LastestPost />
      <Footer />
    </>
  )
}

export default Blog