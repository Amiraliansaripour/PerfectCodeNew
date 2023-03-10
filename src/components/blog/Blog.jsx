import React , { useEffect, useState }from 'react'
import BlogHero from './blogHero/BlogHero';
import LastestPost from './lastestPost/LastestPost';
import Divider from './Divider';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [lastBlog, setLastBlog] = useState([])
  const [treepleBlog, setTreepleBlog] = useState([])
  useEffect(() => {
    axios.get('https://api.perfectcode.ir/api/blog').then(({ data }) => setBlogs([data]));
    axios.get(`https://api.perfectcode.ir/api/lastblog`).then(({ data }) => setLastBlog([data]));
    axios.get(`https://api.perfectcode.ir/api/treepleblog`).then(({ data }) => setTreepleBlog([data]));

  }, [])

  let mainBlog = []
  let mainLastBlog = []
  let mainTreepleBlog = []

  blogs.map(item => (
    mainBlog = item.blog
  ))
  lastBlog.map(item => (
    mainLastBlog = item.lastblog
  ))
  treepleBlog.map(item => (
    mainTreepleBlog = item.treepleblog
  ))


  return (
    <>
        <BlogHero lastBlog={mainLastBlog} treepleBlog={mainTreepleBlog} />
        <Divider />
        <LastestPost blogs={mainBlog} />
    </>
  )
}

export default Blog