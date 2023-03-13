import React from 'react'
import { Link } from 'react-router-dom'

const NewestBlog = ({ img, alt, title, id }) => {
    return (
        <div className="mini-blog-item col-5 col-md-12 d-flex flex-column flex-md-row-reverse flex-sm-column flex-xl-row-reverse flex-lg-column justify-content-center mt-5 align-items-center " key={id}>
            <img src={img} width={240} height={540} className='img-fluid' alt={alt} />
            <strong className='px-0 px-md-4 text-center mt-xl-0 mt-lg-4 mt-2 mt-md-0'>

                <Link to={`/blogpost/${id}`}>
                    {title}
                </Link>
            </strong>
        </div>
    )
}

export default NewestBlog