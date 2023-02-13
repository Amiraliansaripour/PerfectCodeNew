import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <div className="header">
        <Navbar />

        <div className="header-content row">
            <div className="content col-lg-6 col-md-6 col-sm-12">
                <h1>
                    تیم استارتاپی پرفکت کد 
                </h1>
                <p>
                ما در تیم پرفکت کد قصد داریم با بروز ترین امکانات موجود سایت شمارو طراحی کنیم و به کسب و کار شما رونق ببخشیم ، تیم خبره ما هر آنچیزی که شما نیاز داشته باشید رو براتون خلق میکنه فقط کافیه روی دکمه زیر بزنی تا به صورت رایگان مشاوره بگیری
                </p>
                <div className="join-btn">

                </div>
            </div>
            <div className="content-image col-lg-6 col-md-6 col-sm-12">
                <img src="../assets/stylingImage/wave-img.png" alt="" className="img-back" />
                <img src="../assets/stylingImage/mobile-img.png" alt="" className="mobile-img" />

                <img src="../assets/stylingImage/mosalas.png" alt="" className="obgect-img" />
                <img src="../assets/stylingImage/circle.png" alt="" className="obgect-img3" />
                <img src="../assets/stylingImage/marpich.png" alt="" className="obgect-img2" />
                <img src="../assets/stylingImage/3dmokab.png" alt="" className="obgect-img1" />
                <img src="../assets/stylingImage/545.png" alt="" className="obgect-img4" />    
                <img src="../assets/stylingImage/react.png" alt="" className="obgect-img5" />    
            </div>
        </div>
    </div>
  )
}

export default Header