import React from 'react';
import { Link } from 'react-router-dom';
import { useParallax } from 'react-scroll-parallax';
import Navbar from '../../Navbar/Navbar';
import './Hero.css';


const Hero = () => {
    const parallax = useParallax({
        speed: -10,
    });
    const parallax1 = useParallax({
        speed: -1,
    });
    return (
        <div className="header">
            <Navbar />
            <div className="header-content p-3" ref={parallax.ref} >
                <div className="content">
                    <h1 className='mt-5 mt-lg-0'>
                        تیم استارتاپی پرفکت کد
                    </h1>
                    <strong className='mb-3'>
                        ما در تیم پرفکت کد قصد داریم با بروز ترین امکانات موجود سایت شمارو طراحی کنیم و به کسب و کار شما رونق ببخشیم ، تیم خبره ما هر آنچیزی که شما نیاز داشته باشید رو براتون خلق میکنه فقط کافیه روی دکمه زیر بزنی تا به صورت رایگان مشاوره بگیری.
                    </strong>
                    <div className="join-btn">
                        <Link to="/" className="btn-hover">تیم پرفکت </Link>
                        <Link to="/" className="btn-active">مشاوره اختصاصی</Link>
                    </div>
                </div>
                <div className="content-image"  ref={parallax1.ref} >
                    <img src="../assets/img/wave-img.png" alt="پرفکت کد" className="img-back" />
                    <img src="../assets/img/mobile1.png" alt="پرفکت کد" className="mobile-img" />
                    <img src="../assets/img/mosalas.png" alt="پرفکت کد" className="obgect-img coin" />
                    <img src="../assets/img/circle.png" alt="پرفکت کد" className="obgect-img3 coin" />
                    <img src="../assets/img/marpich.png" alt="پرفکت کد" className="obgect-img2 coin" />
                    <img src="../assets/img/3dmokab.png" alt="پرفکت کد" className="obgect-img1 coin" />
                    <img src="../assets/img/545.png" alt="پرفکت کد" className="obgect-img4 coin" />
                    <img src="../assets/img/react.png" alt="پرفکت کد" className="obgect-img5 coin" />
                    <img src="../assets/img/django.png" alt="پرفکت کد" className="obgect-img6 coin" />
                </div>
            </div>
        </div>
    )
}

export default Hero