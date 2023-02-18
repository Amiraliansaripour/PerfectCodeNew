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
            ما کی هستیم و قراره چیکار کنیم ؟
            </h1>
            <p>
            ما یه تیم جَوون و خوش سلیقه و آماده ی پیشرفت هستیم و حالا اینجاییم که با طراحی سایتتون شماهم لذت پیشرفت رو تجربه کنین

خیلی از کاسبی ها هستن که هنوز سایت برای خودشون ندارن و با این کار حجم خیلی زیادی از بازار رو از دست دادن و نمیتونن فروششون رو در حد کل شهر های ایران گسترش بدن شاید با خودتون بگید که در فضای مجازی بهمون اعتماد نمیکنن ، ولی شما با دریافت نماد الکترونیک مغازه خودتون رو مورد اعتماد ملیون ها نفر میکنین و فروش فوق العاده ای رو تجربه میکنین </p>            <div className="join-btn">
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