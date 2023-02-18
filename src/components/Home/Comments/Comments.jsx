import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Comments.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const Comments = () => {
    const swiperRef = useRef()

    // slider seting 
    const sliderSettings = {
        200: {
            slidesPerView: 1.2,
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
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
        1400: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
    };
    return (
        <section className="comments">
            <h2>نظرات کسب و کار ها</h2>

            <div className="comment-slider">
                {/* slider btn  */}
                <div className="comment-slider-btn">
                    <button className="comment-next" onClick={() => swiperRef.current?.slideNext()}><i className="fa fa-angle-right"></i></button>
                    <button className="comment-prev" onClick={() => swiperRef.current?.slidePrev()}><i className="fa fa-angle-left"></i></button>
                </div>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={sliderSettings}
                    pagination={{ clickable: true }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >

                    <SwiperSlide>
                        <div className="comment-slide">

                            <div className="comment-slide-title mt-3">
                                <div className="comment-profile">
                                    <div className="comment-img">
                                        <img src="https://images.squarespace-cdn.com/content/v1/59e5d996dc2b4a72ea60c9dc/1554833988306-SBDKETYLJ70WFCNJ2IZB/850_9556.jpg?format=1500w" alt="" />
                                    </div>
                                    <div className="comment-profile-name">
                                        <p>محمد رضا عاشوری</p>
                                        <a href="https://instagram/mohammadreza.com">@mohammadreza</a>
                                    </div>
                                </div>

                                <div className="comment-instagram">
                                    <a href="">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>


                            </div>

                            <div className="comment-slide-decription">
                                    <p>این یک متن نمونه برای تست استایل نظر کاربر برای سایت استارتاپ پرفکت کد میباشد و همینطور دوباره این متن برای بیشتر نشون دادن این متن هست که درباره پرفکت کد تعریف میشود</p>
                            </div>

                        </div>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <div className="comment-slide">

                            <div className="comment-slide-title mt-3">
                                <div className="comment-profile">
                                    <div className="comment-img">
                                        <img src="https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=1200/https://images.cakeresume.com/images/d96d3ad3-4de2-478a-b157-7c4c507c88e6.jpeg" alt="" />
                                    </div>
                                    <div className="comment-profile-name">
                                        <p>علی قربانی</p>
                                        <a href="https://instagram/mohammadreza.com">@mohammadreza</a>
                                    </div>
                                </div>

                                <div className="comment-instagram">
                                    <a href="">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>


                            </div>

                            <div className="comment-slide-decription">
                                    <p>این یک متن نمونه برای تست استایل نظر کاربر برای سایت استارتاپ پرفکت کد میباشد و همینطور دوباره این متن برای بیشتر نشون دادن این متن هست که درباره پرفکت کد تعریف میشود</p>
                            </div>

                        </div>
                    </SwiperSlide>


                    
                    <SwiperSlide>
                        <div className="comment-slide">

                            <div className="comment-slide-title mt-3">
                                <div className="comment-profile">
                                    <div className="comment-img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIa47XuBnkGRMjeSogf01T0NSZCUU_PQqGQ&usqp=CAU" alt="" />
                                    </div>
                                    <div className="comment-profile-name">
                                        <p>رضا شریفی</p>
                                        <a href="https://instagram/mohammadreza.com">@mohammadreza</a>
                                    </div>
                                </div>

                                <div className="comment-instagram">
                                    <a href="">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>


                            </div>

                            <div className="comment-slide-decription">
                                    <p>این یک متن نمونه برای تست استایل نظر کاربر برای سایت استارتاپ پرفکت کد میباشد و همینطور دوباره این متن برای بیشتر نشون دادن این متن هست که درباره پرفکت کد تعریف میشود</p>
                            </div>

                        </div>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <div className="comment-slide">

                            <div className="comment-slide-title mt-3">
                                <div className="comment-profile">
                                    <div className="comment-img">
                                        <img src="https://rommenphotography.com/wp-content/uploads/2012/04/Corporate-Portrait-CV-headshot_zakelijke_portretfoto.jpg" alt="" />
                                    </div>
                                    <div className="comment-profile-name">
                                        <p>محمد رضا عاشوری</p>
                                        <a href="https://instagram/mohammadreza.com">@mohammadreza</a>
                                    </div>
                                </div>

                                <div className="comment-instagram">
                                    <a href="">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>


                            </div>

                            <div className="comment-slide-decription">
                                    <p>این یک متن نمونه برای تست استایل نظر کاربر برای سایت استارتاپ پرفکت کد میباشد و همینطور دوباره این متن برای بیشتر نشون دادن این متن هست که درباره پرفکت کد تعریف میشود</p>
                            </div>

                        </div>
                    </SwiperSlide>

                
                </Swiper>
            </div>
        </section>
    )
}

export default Comments