import React from 'react';
import { Link } from 'react-router-dom';
import { useParallax } from 'react-scroll-parallax';
import Navbar from '../../Navbar/Navbar';
import './Hero.css';


const Hero = () => {
    const parallax = useParallax({
        speed: -20,
    });
    const parallax1 = useParallax({
        speed: -1,
    });
    return (
        <div className="header">
            <Navbar />
            <div className="header-content p-3" ref={parallax.ref} >
                <div className="content">
                    <h1>
                        تیم استارتاپی پرفکت کد
                    </h1>
                    <p>
                        ما در تیم پرفکت کد قصد داریم با بروز ترین امکانات موجود سایت شمارو طراحی کنیم و به کسب و کار شما رونق ببخشیم ، تیم خبره ما هر آنچیزی که شما نیاز داشته باشید رو براتون خلق میکنه فقط کافیه روی دکمه زیر بزنی تا به صورت رایگان مشاوره بگیری.
                    </p>
                    <div className="join-btn">
                        <Link to="/" className="btn-hover">تیم پرفکت </Link>
                        <Link to="/" className="btn-active">مشاوره اختصاصی</Link>
                    </div>
                </div>
                <div className="content-image"  ref={parallax1.ref} >
                    <img src="../assets/img/wave-img.png" alt="" className="img-back" />
                    <img src="../assets/img/mobile1.png" alt="" className="mobile-img" />
                    <img src="../assets/img/mosalas.png" alt="" className="obgect-img coin" />
                    <img src="../assets/img/circle.png" alt="" className="obgect-img3 coin" />
                    <img src="../assets/img/marpich.png" alt="" className="obgect-img2 coin" />
                    <img src="../assets/img/3dmokab.png" alt="" className="obgect-img1 coin" />
                    <img src="../assets/img/545.png" alt="" className="obgect-img4 coin" />
                    <img src="../assets/img/react.png" alt="" className="obgect-img5 coin" />
                    <img src="../assets/img/django.png" alt="" className="obgect-img6 coin" />
                </div>
            </div>
        </div>
    )
}

export default Hero