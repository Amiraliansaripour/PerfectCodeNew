import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import './Samples.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const Samples = () => {
  const swiperRef = useRef();

  const sliderSettings = {
    200:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };
  return (
    <section className="samples">
      <div className="sample-title">
        <h2>نمونه کار ها</h2>
        <Link to="/samples" className="btn-active">دیدن همه نمونه کارها</Link>
      </div>

      <div className="samples-slider">
        <div className="sample-slider-btn">
          <button className="next" onClick={() => swiperRef.current?.slidePrev()}><i className="fa fa-angle-right"></i></button>
          <button className="prev" onClick={() => swiperRef.current?.slideNext()}><i className="fa fa-angle-left"></i></button>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={sliderSettings}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
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

                <Link to="/samples/2">دیدن پیش نمایش نمونه کار<i className="fa fa-angle-double-left"></i></Link>
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

                <Link to="/samples/2">دیدن پیش نمایش نمونه کار<i className="fa fa-angle-double-left"></i></Link>
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

                <Link to="/samples/2">دیدن پیش نمایش نمونه کار<i className="fa fa-angle-double-left"></i></Link>
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

                <Link to="/samples/2">دیدن پیش نمایش نمونه کار<i className="fa fa-angle-double-left"></i></Link>
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

                <Link to="/samples/2">دیدن پیش نمایش نمونه کار<i className="fa fa-angle-double-left"></i></Link>
              </div>

            </div>

          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Samples