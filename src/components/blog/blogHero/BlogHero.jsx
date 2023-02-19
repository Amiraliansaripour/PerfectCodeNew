import React from 'react'
import './BlogHero.css'
import NewestBlog from './../readyComponents/NewestBlog';
import HeroBlog from './../readyComponents/HeroBlog';
const BlogHero = () => {
  return (
    <section className='container content blog d-flex flex-column-reverse flex-lg-row justify-content-start align-items-start'>
      <div className='col-10 col-xl-5 col-lg-5 d-flex flex-row flex-wrap justify-content-evenly flex mx-lg-auto mini-blog mx-auto '>
        <h2 className='h1 mt-5 mt-lg-0 w-100'>تازه ترین اخبار ها</h2>
        <NewestBlog img='../assets/img/blog/mini1.png' alt='blog title' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <NewestBlog img='../assets/img/blog/mini1.png' alt='blog title' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <NewestBlog img='../assets/img/blog/mini1.png' alt='blog title' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
      </div>
      <div className='col-10 col-xl-6 col-lg-6 mx-lg-auto blog-post mx-auto'>
        <h1>بلاگ پرفکت کد</h1>
        <HeroBlog img='../assets/img/blog/post1.png'  alt='post title'  date='1401/06/07'  addedTime='4 دقیقه پیش'  desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
      </div>
    </section>
  )
}

export default BlogHero