import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'
import React, { useContext } from 'react'
import '../blogHero/BlogHero.css'
import MainBlog from '../readyComponents/MainBlog'
import { BgBlur } from '../../provider/ParallaxFooter';

const LastestPost = () => {
  const [parallaxFooter, setParallaxFooter] = useContext(BgBlur)

  return (
    <section className='container content blog' style={{ filter: parallaxFooter ? 'blur(4px)' : 'blur(0)' }}>
      <h2 className='h1 text-center mx-auto'>تازه ترین اخبار ها</h2>
      <div className=' d-flex flex-row flex-wrap justify-content-start align-items-start'>
        <MainBlog img='../assets/img/blog/post1.png' id='1' link='1' alt='post title' date='1401/06/08' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <MainBlog img='../assets/img/blog/post1.png' id='2' link='1' alt='post title' date='1401/06/10' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <MainBlog img='../assets/img/blog/post1.png' id='3' link='1' alt='post title' date='1401/06/12' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <MainBlog img='../assets/img/blog/post1.png' id='4' link='1' alt='post title' date='1401/06/15' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
        <MainBlog img='../assets/img/blog/post1.png' id='5' link='1' alt='post title' date='1401/06/21' addedTime='4 دقیقه پیش' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' />
      </div>
      <button className='btn-active p-4 mt-5 mx-auto'>
        تمام اخبار های پرفکت کد
      </button>
    </section>
  )
}

export default LastestPost