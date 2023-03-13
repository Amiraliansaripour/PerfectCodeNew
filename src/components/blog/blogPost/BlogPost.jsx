import React from 'react'
import FullBanner from '../../FullBanner/FullBanner'
import './BlogPost.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// convert to persian date
import moment from 'jalali-moment'

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const [blogs, setBlogs] = useState([])
  let mainBlog = []
  useEffect(() => {
    axios.get(`https://api.perfectcode.ir/api/blog/${id}`).then(({ data }) => setBlogs([data]));
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

          </div>
          {/* blog body */}
          <div className="col-lg-8 col-md-12 col-sm-12 blog-body text-right" dangerouslySetInnerHTML={{ __html: mainBlog.body }} />
        </div>

        <FullBanner />
      </div>
    </>

    // <>
    //     <div className="blog-page" >
    //       <div className="post-blog">
    //         <div className="blog-date">
    //           <p>{ mainBlog?.created_at }</p>
    //           <p>------</p>
    //           <p>امیرعلی انصاری پور</p>
    //         </div>

    //         <div className="blog-titlee">
    //           <h1>{ mainBlog?.title }</h1>
    //         </div>

    //         <p className="blog-description">
    //           اگر در حوزه سئو فعالیت دارید یا این که کسب و کاری دارید که یکی از کانال های بازاریابی شما سئو است، احتمالاً تا به حال فاکتورهای زیادی به گوشتان خورده است! البته این فاکتورها معمولاً فاکتورهایی هستند که در رتبه بندی سایت ها تاثیر دارند.
    //         </p>
    //       </div>

    //       <div className="blog-thumnail">
    //         <img src='img' alt="blog thummnail" />
    //       </div>

    //       <div className="row blog-section">
    //         <div className="col-lg-4 col-md-12 col-sm-12 blog-profile">
    //           <div className="profile-box">
    //             <div className="our-team">
    //               <div className="picture">
    //                 <img className="img-fluid" src="https://assets.website-files.com/61772ea4a9789ec05421a501/617b5718cd3b6d4e732f79e6_team-member-john-carter-defi-x-template.svg" />
    //               </div>
    //               <div className="team-content">
    //                 <h3 className="name">امیرعلی انصاری پور</h3>
    //                 <h4 className="title">Web Developer</h4>
    //               </div>
    //               <ul className="social">
    //                 <li>
    //                   <a href="">
    //                     <i className="fa fa-telegram"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href=""  >
    //                     <i className="fa fa-github"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="" aria-hidden="true">
    //                     <i className="fa fa-gitlab"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="" aria-hidden="true">
    //                     <i className="fa fa-linkedin"></i>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         {/* blog body */}
    //         <div dangerouslySetInnerHTML={{ __html: mainBlog?.body }} className="col-lg-8 col-md-12 col-sm-12 blog-body" style={{ whiteSpace: "pre-wrap" }} />
    //       </div>

    //       <FullBanner />
    //     </div>
    // </>
  )
}

export default BlogPost