import React from 'react'

const HeroBlog = ({ img, alt, date, addedTime, desc }) => {
    return (
        <div className='blog-post-body mt-5'>
            <img src={img} className='img-fluid' alt={alt} />
            <div className='blog-post-desc'>
                <div className='blog-post-time d-flex text-start mb-3'>
                    <p><i className='fa fa-calendar' /> {date}</p>
                    <p><i className='fa fa-clock-o' /> {addedTime}</p>
                </div>
                <p className='blog-title text-light'>{desc}</p>
            </div>
        </div>
    )
}

export default HeroBlog