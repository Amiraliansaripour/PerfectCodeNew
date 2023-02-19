import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Samples.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { useParallax } from 'react-scroll-parallax';

const Samples = () => {
  const swiperRef = useRef();
  const parallax = useParallax({
    speed: 0,
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
      <div className="sample-title">
        <h2>نمونه کار ها</h2>
        <Link to="/samples" className="btn-active">دیدن همه نمونه کارها</Link>
      </div>

      <div className="samples-slider">
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
          {/* Item */}
          <SwiperSlide>
            <div className="samples-slide">

              <div className="sample-slide-title">
                <div className="sample-img-box">
                  <Link to="/samples/2">
                    <img src="../assets/sites/arsha.png" alt="" />
                  </Link>
                </div>

                <div className="sample-slide-name">
                  <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
                  <p>شرکتی</p>
                </div>
              </div>
              <div className="sample-slide-description">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>

                <Link to="/samples/2">پیش نمایش<i className="fa fa-angle-double-left"></i></Link>
              </div>

            </div>
          </SwiperSlide>

          {/* Item */}
          <SwiperSlide>
            <div className="samples-slide">

              <div className="sample-slide-title">
                <div className="sample-img-box">
                  <Link to="/samples/2">
                    <img src="../assets/sites/arsha.png" alt="" />
                  </Link>
                </div>

                <div className="sample-slide-name">
                  <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
                  <p>شرکتی</p>
                </div>
              </div>
              <div className="sample-slide-description">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>

                <Link to="/samples/2">پیش نمایش<i className="fa fa-angle-double-left"></i></Link>
              </div>

            </div>
          </SwiperSlide>
          {/* Item */}
          <SwiperSlide>
            <div className="samples-slide">

              <div className="sample-slide-title">
                <div className="sample-img-box">
                  <Link to="/samples/2">
                    <img src="../assets/sites/arsha.png" alt="" />
                  </Link>
                </div>

                <div className="sample-slide-name">
                  <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
                  <p>شرکتی</p>
                </div>
              </div>
              <div className="sample-slide-description">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>

                <Link to="/samples/2">پیش نمایش<i className="fa fa-angle-double-left"></i></Link>
              </div>

            </div>
          </SwiperSlide>
          {/* Item */}
          <SwiperSlide>
            <div className="samples-slide">

              <div className="sample-slide-title">
                <div className="sample-img-box">
                  <Link to="/samples/2">
                    <img src="../assets/sites/arsha.png" alt="" />
                  </Link>
                </div>

                <div className="sample-slide-name">
                  <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
                  <p>شرکتی</p>
                </div>
              </div>
              <div className="sample-slide-description">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>

                <Link to="/samples/2">پیش نمایش<i className="fa fa-angle-double-left"></i></Link>
              </div>

            </div>

          </SwiperSlide>
          {/* Item */}
          <SwiperSlide>
            <div className="samples-slide">

              <div className="sample-slide-title">
                <div className="sample-img-box">
                  <Link to="/samples/2">
                    <img src="../assets/sites/arsha.png" alt="" />
                  </Link>
                </div>

                <div className="sample-slide-name">
                  <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
                  <p>شرکتی</p>
                </div>
              </div>
              <div className="sample-slide-description">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>

                <Link to="/samples/2">پیش نمایش<i className="fa fa-angle-double-left"></i></Link>
              </div>

            </div>

          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Samples