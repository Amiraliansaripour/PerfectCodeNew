import React from 'react'

const ServiceBox = ({title , icon , desc}) => {
    return (
        <div className="col-12 col-xl-3 col-md-5">
            <div className="icon-box">
                <i className={icon}></i>
            </div>
            <h3 className='mt-3'>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default ServiceBox