import Tooltip from 'rc-tooltip'
import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'jalali-moment'

const MainBlog = ({ img, id, alt, date, addedTime, title }) => {
    return (
        <div className='mx-lg-auto blog-post mx-auto' key={id}>
            <div className='blog-post-body mt-5'>
                <Link to={`/blogpost/${id}`} style={{ width: "100%", height: "200px",overflow:"hidden" }}>
                    <img src={img} className='img-fluid' alt={alt} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                </Link>
                <div className='blog-post-desc'>
                    <div className='blog-post-time d-flex text-end mb-3'>
                        <p><i className='fa-regular fa-calendar m-1' />{moment(date).locale('fa').format('YYYY/MM/DD')}</p>
                        <p><i className='fa-regular fa-clock m-1' /> {addedTime}</p>
                    </div>
                    <p className='blog-title text-light'><Link to={`/blogpost/${id}`}>{title}</Link></p>
                    <div className='mt-4 d-flex flex-row-reverse justify-content-start gap-3'>
                        {/* <Link to={`/blogpost/${id}&title=${title}`}> */}
                        <Link to={`/blogpost/${id}`}>
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
                        <Link to='/'>
                            <Tooltip placement="bottom" trigger={['hover']} overlay={<span>اشتراک گذاری</span>}>
                                <button className='btn-active'>
                                    <i className='fa fa-link'></i>
                                </button>
                            </Tooltip>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainBlog