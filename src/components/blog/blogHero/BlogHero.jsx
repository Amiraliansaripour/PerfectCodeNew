import React from 'react'
import './BlogHero.css'
import NewestBlog from './../readyComponents/NewestBlog';
import HeroBlog from './../readyComponents/HeroBlog';
const BlogHero = ({ lastBlog, treepleBlog }) => {
  return (
    <section className='container content blog d-flex flex-column-reverse flex-lg-row justify-content-start align-items-start'>
      <div className='col-10 col-xl-5 col-lg-5 d-flex flex-row flex-wrap justify-content-evenly flex mx-lg-auto mini-blog mx-auto '>
        <h2 className='h1 mt-5 mt-lg-0 w-100'>تازه ترین اخبار ها</h2>
        {treepleBlog.map((blog) => (
          <NewestBlog img={blog.img} alt={blog.title} title={blog.title} id={blog.id}/>
        ))}
      </div>

      <div className='col-10 col-xl-6 col-lg-6 mx-lg-auto blog-post mx-auto'>
        <h1>بلاگ پرفکت کد</h1>
        {lastBlog.map((blog) => (
          <HeroBlog id={blog.id} img={blog.img} alt={blog.title} date={blog.created_at} title={blog.title} />
        ))}
      </div>
    </section>
  )
}

export default BlogHero