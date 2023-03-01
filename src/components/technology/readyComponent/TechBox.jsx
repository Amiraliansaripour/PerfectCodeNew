import React from 'react'
import { useEffect } from 'react';

const TechBox = ({ img, heading, desc }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="technology container content">
      <div className="row d-flex flex-row-reverse justify-content-center align-items-center p-4">
        <div className="col-12 col-lg-6">
          <img src={img} alt={`طراحی سایت ، ${heading}`} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
          <h1>{heading}</h1>
          <div className='mt-4'>
            <p className="text-muted"></p>
            <strong >{desc}</strong>
            <p className='mt-3 tech-perfect-info'>تیم پرفکت کد اینجاس تا با مشاوره رایگان به شما در طراحی سایت فروشگاهی کمک کنه</p>
          </div>
          <button className='btn-active mt-4'>دریافت مشاوره رایگان</button>
        </div>
      </div>
    </div>

  )
}

export default TechBox