import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Samples.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { useParallax } from 'react-scroll-parallax';
import SampleBox from './readyComponent/SampleBox';

const Samples = () => {
  const swiperRef = useRef();
  const parallax = useParallax({
    speed: 15,
  });
  const sliderSettings = {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3.1,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  };
  return (
    <section className="samples" ref={parallax.ref}>
      <div className="sample-title mb-5 flex-column flex-lg-row-reverse">
        <h2 className='mb-4 mb-lg0'>نمونه کار ها</h2>
        <Link to="/samples" className="btn-active">دیدن همه نمونه کارها</Link>
      </div>

      <div className="samples-slider mt-5">
        <div className="sample-slider-btn">
          <button className="next" onClick={() => swiperRef.current?.slideNext()}><i className="fa fa-angle-right"></i></button>
          <button className="prev" onClick={() => swiperRef.current?.slidePrev()}><i className="fa fa-angle-left"></i></button>
        </div>
        <Swiper
          spaceBetween={10}
          breakpoints={sliderSettings}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >

          <SwiperSlide >
            <SampleBox img='../assets/img/sample/shikopiik.png' name='قالب فروشگاهی شیکوپیک' categories='فروشگاهی' desc='این قالب فروشگاهی یکی از زیبا تری و جذاب ترین قالب ها برای فروشگاه آنلاین شما است' link='/samples/2' />
          </SwiperSlide>

          <SwiperSlide >
            <SampleBox img='../assets/img/sample/arsha.png' name='قالب شرکت آرشا' categories='شرکتی' desc='قالب شرکتی ارشا یکی از بهترین قالب های حال حاظر که میتوانید همین الان برای شرکت خود تهیه کنید' link='/samples/2' />
          </SwiperSlide>

          <SwiperSlide >
            <SampleBox img='../assets/img/sample/bicolorPortfolio.png' name='قالب رزومه ای' categories='رزومه' desc='قالب رزومه ای بیکو زیبا ترین قالب برای طراحی سایت رزومه ایه شما رزومه خود را حرفه ای کنید' link='/samples/2' />
          </SwiperSlide>

          <SwiperSlide >
            <SampleBox img='../assets/img/sample/eduwell.png' name='قالب آموزشی ایجوول' categories='آموزشی' desc='قالب آموزشی ایجوول زیبا ترین و مطمعن ترین قالب برای سایت آموزشی شما' link='/samples/2' />
          </SwiperSlide>

          <SwiperSlide >
            <SampleBox img='../assets/img/sample/fammsShop.png' name='قالب فروشگاهی فمس شاپ' categories='فروشگاهی' desc='قالب فمس شاپ یکی از زیبا تری قالب ها برای فروشگاه آنلاین شما' link='/samples/2' />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}

export default Samples