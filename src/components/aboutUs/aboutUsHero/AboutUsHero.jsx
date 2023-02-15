import React from 'react';
import './AboutUsHero.css';
import { Link } from 'react-router-dom';
const AboutUsHero = () => {
  return (
    <>
      <section className='content header about-us-hero'>
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
          <div className="bg-img w-50 p-md-absolut w-md-100 z-2"></div>
        </div>
      </section>
    </>
  )
}

export default AboutUsHero