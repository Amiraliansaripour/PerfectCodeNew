import React from 'react'
import './Guide.css'
import { useParallax } from 'react-scroll-parallax';
const Guide = () => {
  const parallax = useParallax({
    speed: 20,
  });
  return (
    <div className="guide" ref={parallax.ref}>
      <h2>نحوه ثبت سفارش</h2>
      <div className="guide-section">
        <div className="guide-img">
          <img src="../assets/img/login.png" alt="" />
        </div>

        <div className="guide-text">

          <div className="guide-box">
            <div className="icon-box">
              <i className="fa fa-user"></i>
            </div>
            <h3>ثبت اطلاعات داخل سایت</h3>
          </div>

          <div className="guide-box">
            <div className="icon-box">
              <i className="fa fa-user-circle-o"></i>
            </div>
            <h3>ثبت اطلاعات داخل سایت</h3>
          </div>

          <div className="guide-box">
            <div className="icon-box">
              <i className="fa fa-television"></i>
            </div>
            <h3>ثبت اطلاعات داخل سایت</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Guide