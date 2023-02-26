import React from 'react'
import { Link } from 'react-router-dom';

const SampleBox = ({ img, name, categories, desc, link }) => {
    return (
        <div className="samples-slide">
            <div className="sample-slide-title">
                <div className="sample-img-box">
                    <Link to={link}>
                        <img src={img} alt={name} />
                    </Link>
                </div>
            </div>
            <div className="sample-slide-description">
                <div className="sample-slide-name">
                    <h3 className='pe-2'>{name}</h3>
                    <p>{categories}</p>
                </div>
                <p className='text-end'>{desc}</p>
                <Link to={link} className='mt-3'>پیش نمایش<i className="fa fa-angle-double-left"></i></Link>
            </div>
        </div>
    )
}

export default SampleBox