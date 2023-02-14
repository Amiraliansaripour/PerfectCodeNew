import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className="header">
            <Navbar />

            <div className="header-content p-3">
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
                <div className="content-image">
                    <img src="../assets/stylingImage/wave-img.png" alt="" className="img-back" />
                    <img src="../assets/stylingImage/mobile-img.png" alt="" className="mobile-img" />

                    <img src="../assets/stylingImage/mosalas.png" alt="" className="obgect-img coin" />
                    <img src="../assets/stylingImage/circle.png" alt="" className="obgect-img3 coin" />
                    <img src="../assets/stylingImage/marpich.png" alt="" className="obgect-img2 coin" />
                    <img src="../assets/stylingImage/3dmokab.png" alt="" className="obgect-img1 coin" />
                    <img src="../assets/stylingImage/545.png" alt="" className="obgect-img4 coin" />
                    <img src="../assets/stylingImage/react.png" alt="" className="obgect-img5 coin" />
                </div>
            </div>
        </div>
    )
}

export default Header