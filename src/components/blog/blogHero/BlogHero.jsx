import React from 'react'
import './BlogHero.css'
const BlogHero = () => {
  return (
    <section className='container content blog d-flex flex-column-reverse flex-lg-row justify-content-start align-items-start'>
      <div className='col-10 col-xl-5 col-lg-5 d-flex flex-row flex-wrap justify-content-evenly flex mx-lg-auto mini-blog mx-auto '>
        <h1 className='mt-5 mt-lg-0'>تازه ترین اخبار ها</h1>
        <div className="col-5 col-md-12 mini-blog-item d-flex flex-column flex-md-row-reverse flex-sm-column flex-xl-row-reverse flex-lg-column justify-content-center mt-5 align-items-center ">
          <img src="../assets/img/blog/mini1.png" width={240} className='img-fluid' alt="blog title" />
          <strong className='px-0 px-md-4 text-center mt-xl-0 mt-lg-4 mt-4 mt-md-0'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</strong>
        </div>
        <div className="col-5 col-md-12 mini-blog-item d-flex flex-column flex-md-row-reverse flex-sm-column flex-xl-row-reverse flex-lg-column justify-content-center mt-5 align-items-center ">
          <img src="../assets/img/blog/mini1.png" width={240} className='img-fluid' alt="blog title" />
          <strong className='px-0 px-md-4 text-center mt-xl-0 mt-lg-4 mt-4 mt-md-0'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</strong>
        </div>
        <div className="col-5 col-md-12 mini-blog-item d-flex flex-column flex-md-row-reverse flex-sm-column flex-xl-row-reverse flex-lg-column justify-content-center mt-5 align-items-center ">
          <img src="../assets/img/blog/mini1.png" width={240} className='img-fluid' alt="blog title" />
          <strong className='px-0 px-md-4 text-center mt-xl-0 mt-lg-4 mt-4 mt-md-0'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</strong>
        </div>
      </div>
      <div className='col-10 col-xl-6 col-lg-6 mx-lg-auto blog-post mx-auto'>
        <h1>بلاگ پرفکت کد</h1>
        <div className='blog-post-body mt-5'>
          <img src="../assets/img/blog/post1.png" className='img-fluid' alt="post title" />
          <div className='blog-post-desc'>
            <div className='blog-post-time d-flex text-start mb-3'>
              <p><i className='fa fa-calendar' /> 1401/06/07</p>
              <p><i className='fa fa-clock-o' /> 4 دقیقه پیش</p>
            </div>
            <strong className='h2 text-light'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHero