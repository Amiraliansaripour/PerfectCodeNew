import Tooltip from 'rc-tooltip'
import React from 'react'
import { Link } from 'react-router-dom';

const MainBlog = ({ img, id, alt, date, addedTime, desc }) => {
    return (
        <div className='col-10 col-xl-5 col-lg-6 mx-lg-auto blog-post mx-auto'>
            <div className='blog-post-body mt-5'>
                <img src={img} className='img-fluid' alt={alt} />
                <div className='blog-post-desc'>
                    <div className='blog-post-time d-flex text-end mb-3'>
                        <p><i className='fa-regular fa-calendar' /> {date}</p>
                        <p><i className='fa-regular fa-clock' /> {addedTime}</p>
                    </div>
                    <p className='blog-title text-light'>{desc}</p>
                    <div className='mt-4 d-flex flex-row-reverse justify-content-start gap-3'>
                        <Link to={`/blog/id=${id}&title=${desc}`}>
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