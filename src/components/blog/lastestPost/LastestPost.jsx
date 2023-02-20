import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'
import React from 'react'
import { Link } from 'react-router-dom'
import '../blogHero/BlogHero.css'
import MainBlog from '../readyComponents/MainBlog'
const LastestPost = () => {
  return (
    <section className='container content blog'>
      <h2 className='h1 text-center mx-auto'>تازه ترین اخبار ها</h2>
      <div className=' d-flex flex-row flex-wrap justify-content-start align-items-start'>
        <MainBlog img='../assets/img/blog/post1.png' id='1' link='1' alt='post title' date='1401/06/07' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <MainBlog img='../assets/img/blog/post1.png' id='2' link='1' alt='post title' date='1401/06/07' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <MainBlog img='../assets/img/blog/post1.png' id='3' link='1' alt='post title' date='1401/06/07' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <MainBlog img='../assets/img/blog/post1.png' id='4' link='1' alt='post title' date='1401/06/07' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <MainBlog img='../assets/img/blog/post1.png' id='5' link='1' alt='post title' date='1401/06/07' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
      </div>
      <button className='btn-active p-4 mt-5 mx-auto'>
        تمام اخبار های پرفکت کد
      </button>
    </section>
  )
}

export default LastestPost