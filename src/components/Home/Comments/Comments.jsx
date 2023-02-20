import React, { useContext, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Comments.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { useParallax } from 'react-scroll-parallax';
import { BgBlur } from '../../provider/ParallaxFooter';
import CommentBox from './raedyComponent/CommentBox';

const Comments = () => {


    const [parallaxFooter, setParallaxFooter] = useContext(BgBlur)

    const parallax = useParallax({
        speed: 0,
    });

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
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
    };
    return (
        <section className="comments" ref={parallax.ref} style={{ filter: parallaxFooter ? 'blur(4px)' : 'blur(0)' }}>
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
                        <CommentBox img='https://images.squarespace-cdn.com/content/v1/59e5d996dc2b4a72ea60c9dc/1554833988306-SBDKETYLJ70WFCNJ2IZB/850_9556.jpg?format=1500w' tagLink='https://instagram/mohammadreza.com' name='محمد رضا عاشوری' tagName='@mohammadreza' desc='این یک متن نمونه برای تست استایل نظر کاربر برای سایت استارتاپ پرفکت کد میباشد و همینطور دوباره این متن برای بیشتر نشون دادن این متن هست که درباره پرفکت کد تعریف میشود' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentBox img='https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=1200/https://images.cakeresume.com/images/d96d3ad3-4de2-478a-b157-7c4c507c88e6.jpeg' tagLink='https://instagram/mohammadreza.com' name='علی قربانی' tagName='@mohammadreza' desc='این یک متن نمونه برای تست استایل نظر کاربر برای سایت استارتاپ پرفکت کد میباشد و همینطور دوباره این متن برای بیشتر نشون دادن این متن هست که درباره پرفکت کد تعریف میشود' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentBox img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIa47XuBnkGRMjeSogf01T0NSZCUU_PQqGQ&usqp=CAU' tagLink='https://instagram/mohammadreza.com' name='رضا شریفی' tagName='@mohammadreza' desc='این یک متن نمونه برای تست استایل نظر کاربر برای سایت استارتاپ پرفکت کد میباشد و همینطور دوباره این متن برای بیشتر نشون دادن این متن هست که درباره پرفکت کد تعریف میشود' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentBox img='https://rommenphotography.com/wp-content/uploads/2012/04/Corporate-Portrait-CV-headshot_zakelijke_portretfoto.jpg' name='محمد رضا عاشوری' tagName='@mohammadreza' desc='این یک متن نمونه برای تست استایل نظر کاربر برای سایت استارتاپ پرفکت کد میباشد و همینطور دوباره این متن برای بیشتر نشون دادن این متن هست که درباره پرفکت کد تعریف میشود' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Comments