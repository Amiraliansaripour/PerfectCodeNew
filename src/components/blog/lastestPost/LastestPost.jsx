import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'
import React, { useContext } from 'react'
import '../blogHero/BlogHero.css'
import MainBlog from '../readyComponents/MainBlog'
import { BgBlur } from '../../provider/ParallaxFooter';

const LastestPost = ({ blogs }) => {
  const [parallaxFooter, setParallaxFooter] = useContext(BgBlur)
console.log(blogs);
  return (
    <section className='container content blog' style={{ filter: parallaxFooter ? 'blur(4px)' : 'blur(0)' }} >
      <h2 className='h1 text-center mx-auto'>تازه ترین اخبار ها</h2>
      <div className=' d-flex flex-row flex-wrap justify-content-start align-items-start'>
        {blogs?.map((blog) => (
          <MainBlog img={blog.img} id={blog.id} link={blog.id} alt={blog.title} date={blog.created_at} addedTime='4 دقیقه پیش' title={blog.title} />
        ))}

      </div>
      <button className='btn-active p-4 mt-5 mx-auto'>
        تمام اخبار های پرفکت کد
      </button>
    </section>
  )
}

export default LastestPost