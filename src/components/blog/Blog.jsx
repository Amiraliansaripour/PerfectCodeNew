import React from 'react'
import BlogHero from './blogHero/BlogHero';
import LastestPost from './lastestPost/LastestPost';
import Divider from './Divider';

const Blog = () => {  
  return (
    <>
      <BlogHero />
      <Divider />
      <LastestPost />
    </>
  )
}

export default Blog