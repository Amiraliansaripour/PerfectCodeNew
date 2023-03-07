import React, { useState } from 'react'
import BlogHero from './blogHero/BlogHero';
import LastestPost from './lastestPost/LastestPost';
import Divider from './Divider';
import axios from 'axios';
import { useEffect } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    axios.get('https://api.perfectcode.ir/api/blog').then(({ data }) => setBlogs([data]));
  }, [])
  
  let mainBlog = []
  blogs.map(item => (
    mainBlog = item.blog
  ))
  console.log(blogs);
  return (
    <>
      <BlogHero />
      <Divider />
      <LastestPost blogs={mainBlog}/>
    </>
  )
}

export default Blog