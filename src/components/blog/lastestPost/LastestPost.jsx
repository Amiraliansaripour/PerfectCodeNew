import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'
import React from 'react'
import { Link } from 'react-router-dom'
import '../blogHero/BlogHero.css'
const LastestPost = () => {
  return (
    <section className='container content blog'>
      <h2 className='h1 text-center mx-auto'>تازه ترین اخبار ها</h2>
      <div className=' d-flex flex-row flex-wrap justify-content-start align-items-start'>
        <div className='col-10 col-xl-5 col-lg-6 mx-lg-auto blog-post mx-auto'>
          <div className='blog-post-body mt-5'>
            <img src="../assets/img/blog/post1.png" className='img-fluid' alt="post title" />
            <div className='blog-post-desc'>
              <div className='blog-post-time d-flex text-start mb-3'>
                <p><i className='fa fa-calendar' /> 1401/06/07</p>
                <p><i className='fa fa-clock-o' /> 4 دقیقه پیش</p>
              </div>
              <strong className='h2 text-light lh-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</strong>
              <div className='mt-4 d-flex flex-row-reverse justify-content-start gap-3'>
                <Link to='/'>
                  <button className='btn-active'>
                    مطالعه بیشتر
                  </button>
                </Link>
                <Link to='/'>
                  <Tooltip placement="bottom" trigger={['hover']} overlay={<span>نشان کردن</span>}>
                    <button className='btn-active'>
                      <i className='fa fa-star'></i>
                    </button>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-10 col-xl-5 col-lg-6 mx-lg-auto blog-post mx-auto'>
          <div className='blog-post-body mt-5'>
            <img src="../assets/img/blog/post1.png" className='img-fluid' alt="post title" />
            <div className='blog-post-desc'>
              <div className='blog-post-time d-flex text-start mb-3'>
                <p><i className='fa fa-calendar' /> 1401/06/07</p>
                <p><i className='fa fa-clock-o' /> 4 دقیقه پیش</p>
              </div>
              <strong className='h2 text-light lh-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</strong>
              <div className='mt-4 d-flex flex-row-reverse justify-content-start gap-3'>
                <Link to='/'>
                  <button className='btn-active'>
                    مطالعه بیشتر
                  </button>
                </Link>
                <Link to='/'>
                  <Tooltip placement="bottom" trigger={['hover']} overlay={<span>نشان کردن</span>}>
                    <button className='btn-active'>
                      <i className='fa fa-star'></i>
                    </button>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-10 col-xl-5 col-lg-6 mx-lg-auto blog-post mx-auto'>
          <div className='blog-post-body mt-5'>
            <img src="../assets/img/blog/post1.png" className='img-fluid' alt="post title" />
            <div className='blog-post-desc'>
              <div className='blog-post-time d-flex text-start mb-3'>
                <p><i className='fa fa-calendar' /> 1401/06/07</p>
                <p><i className='fa fa-clock-o' /> 4 دقیقه پیش</p>
              </div>
              <strong className='h2 text-light lh-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</strong>
              <div className='mt-4 d-flex flex-row-reverse justify-content-start gap-3'>
                <Link to='/'>
                  <button className='btn-active'>
                    مطالعه بیشتر
                  </button>
                </Link>
                <Link to='/'>
                  <Tooltip placement="bottom" trigger={['hover']} overlay={<span>نشان کردن</span>}>
                    <button className='btn-active'>
                      <i className='fa fa-star'></i>
                    </button>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-10 col-xl-5 col-lg-6 mx-lg-auto blog-post mx-auto'>
          <div className='blog-post-body mt-5'>
            <img src="../assets/img/blog/post1.png" className='img-fluid' alt="post title" />
            <div className='blog-post-desc'>
              <div className='blog-post-time d-flex text-start mb-3'>
                <p><i className='fa fa-calendar' /> 1401/06/07</p>
                <p><i className='fa fa-clock-o' /> 4 دقیقه پیش</p>
              </div>
              <strong className='h2 text-light lh-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</strong>
              <div className='mt-4 d-flex flex-row-reverse justify-content-start gap-3'>
                <Link to='/'>
                  <button className='btn-active'>
                    مطالعه بیشتر
                  </button>
                </Link>
                <Link to='/'>
                  <Tooltip placement="bottom" trigger={['hover']} overlay={<span>نشان کردن</span>}>
                    <button className='btn-active'>
                      <i className='fa fa-star'></i>
                    </button>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='btn-active p-4 mt-5 mx-auto'>
        تمام اخبار های پرفکت کد
      </button>
    </section>
  )
}

export default LastestPost