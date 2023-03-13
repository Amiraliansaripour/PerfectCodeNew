import React from 'react'
import FullBanner from '../../FullBanner/FullBanner'
import './BlogPost.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// convert to persian date
import moment from 'jalali-moment'

const BlogPost = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState([])
  const [nextBlog, setNextBlog] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let mainBlog = []
  useEffect(() => {
    axios.get(`https://api.perfectcode.ir/api/blog/${id}`).then(({ data }) => setBlogs([data]));

    // time

  }, [])

  blogs.map(item => (
    mainBlog = item.blog
  ))

  return (
    <>
      <Helmet>
        <title>{`پرفکت کد | ${mainBlog.title}`}</title>
        <meta name="description"
          content={mainBlog.introduction}
          data-rh="true" />
        <link rel="canonical" href={`https://perfectcode.ir/blogpost/${mainBlog.id}`} />
      </Helmet>

      <div className="blog-page" key={mainBlog.id}>
        <div className="post-blog">
          <div className="blog-date">
            <p>
              {moment(mainBlog.created_at).locale('fa').format('YYYY/MM/DD')}
            </p>
            <p>------</p>
            <p>{mainBlog.user}</p>
          </div>

          <div className="blog-titlee">
            <h1>
              {mainBlog.title}
            </h1>
          </div>

          <p className="blog-description">{mainBlog.introduction}</p>
        </div>

        <div className="blog-thumnail py-2" style={{ borderRadius: "15px", overflow: "hidden" }}>
          <img src={mainBlog.img} alt="blog thummnail" />
        </div>

        <div className="container blog-containar">
          <div className="row blog-section mb-5">
            <div className="col-lg-4 col-md-12 col-sm-12 blog-profile">
              <div className="profile-box">
                <div className="our-team">
                  <div className="picture">
                    <img className="img-fluid" src="https://assets.website-files.com/61772ea4a9789ec05421a501/617b5718cd3b6d4e732f79e6_team-member-john-carter-defi-x-template.svg" />
                  </div>
                  <div className="team-content">
                    <h3 className="name">{mainBlog.user}</h3>
                    <h4 className="title">Web Developer</h4>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="">
                        <i className="fa fa-telegram"></i>
                      </a>
                    </li>
                    <li>
                      <a href=""  >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" aria-hidden="true">
                        <i className="fa fa-gitlab"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" aria-hidden="true">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sociall-container">
                <a href="https://instagram.com/_u/perfectcode.ir">صفحه اینستاگرام پرفکت کد</a>
              </div>

              <div className='blog-post-body mt-4' style={{ borderRadius: "10px" }}>
                <Link to={`/blogpost/3`} style={{ width: "100%", height: "200px" }}>
                  <img src="https://cms.liara.ir/wp-content/uploads/2022/05/what-is-load-balancing.png" className='img-fluid' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Link>
                <div className='blog-post-desc'>
                  <div className='blog-post-time d-flex justify-content-end text-end mb-2'>
                    <p><i className='fa-regular fa-clock m-1' />10 ساعت پیش</p>
                  </div>
                  <p className='blog-title text-light'><Link to={`/blogpost/3`}>نحوه ثبت نام در زرین پال</Link></p>
                  <div className='mt-5 d-flex flex-row-reverse justify-content-start gap-3'>
                    <Link to={`/blogpost/3`}>
                      <button className='btn-active'>
                        مطالعه بیشتر
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            {/* blog body */}
            <div className="col-lg-8 col-md-12 col-sm-12 blog-body text-right" dangerouslySetInnerHTML={{ __html: mainBlog.body }} />
          </div>
        </div>

        <FullBanner />
      </div>
    </>
  )
}

export default BlogPost