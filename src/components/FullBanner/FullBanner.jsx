import React from 'react'
import { Link } from 'react-router-dom'
import './FullBanner.css'
const FullBanner = () => {
    return (
        <section className="fullbanner-con">
            <div className="fullbanner">
                <div className="banner-title">
                    <h2>کسب و کارتو آنلاین کن</h2>
                    <p>کسب کارت نیاز به آنلاین شدن داره پس همین الان به کسب و کارت رونق بده</p>
                </div>
                <div className="banner-btn">
                    <Link to="/contact" className="with-active">ثبت سفارش</Link>
                    <Link to="/contact" className="transparent-btn">نحوه ثبت سفارش</Link>
                </div>
            </div>
        </section>
    )
}

export default FullBanner