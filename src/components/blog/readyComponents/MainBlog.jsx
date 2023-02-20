import Tooltip from 'rc-tooltip'
import React from 'react'
import { Link } from 'react-router-dom';

const MainBlog = ({ img, id, alt, date, addedTime, desc }) => {
    return (
        <div className='col-10 col-xl-5 col-lg-6 mx-lg-auto blog-post mx-auto'>
            <div className='blog-post-body mt-5'>
                <img src={img} className='img-fluid' alt={alt} />
                <div className='blog-post-desc'>
                    <div className='blog-post-time d-flex text-start mb-3'>
                        <p><i className='fa fa-calendar' /> {date}</p>
                        <p><i className='fa fa-clock-o' /> {addedTime}</p>
                    </div>
                    <strong className='h2 text-light'>{desc}</strong>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlog