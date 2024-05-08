import React from 'react'
import { Link } from 'react-router-dom'
import './FullBanner.css'
import { useParallax } from 'react-scroll-parallax';
const FullBanner = () => {
    const parallax = useParallax({
        speed: 10,
    });
    return (
        <section className="fullbanner-con block container" ref={parallax.ref}>
            <div className="fullbanner">
                <div className="banner-title">
                    <h2>کسب و کارتو آنلاین کن</h2>
                    <p className='text-light mt-2'>کسب کارت نیاز به آنلاین شدن داره پس همین الان به کسب و کارت رونق بده</p>
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