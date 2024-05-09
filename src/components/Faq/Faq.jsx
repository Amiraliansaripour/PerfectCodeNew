import React, { useContext } from 'react'
import './Faq.css'

import Accordion from 'react-bootstrap/Accordion';
import { BgBlur } from '../provider/ParallaxFooter';
const Faq = () => {
    const [parallaxFooter, setParallaxFooter] = useContext(BgBlur)
    return (
        <section className="faq block " style={{ filter: parallaxFooter ? 'blur(4px)' : 'blur(0)' , margin:'50px 0', padding:'40px' }} id='faq'>
            <h2 className='mb-5'>پرسش های متداول</h2>

            <div className="faq-container">

                <div className="faq-box">
                    <Accordion>
                        {/* <Accordion.Item eventKey="0" className="faq-item">
                            <Accordion.Header>نحوه ثبت سفارش 1</Accordion.Header>
                            <Accordion.Body>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="faq-item">
                            <Accordion.Header>نحوه ثبت سفارش 2</Accordion.Header>
                            <Accordion.Body>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="faq-item">
                            <Accordion.Header>نحوه ثبت سفارش 3</Accordion.Header>
                            <Accordion.Body>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="faq-item">
                            <Accordion.Header>نحوه ثبت سفارش 4</Accordion.Header>
                            <Accordion.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </Accordion.Body>
                        </Accordion.Item> */}
                        <Accordion.Item eventKey="0" className="faq-item">
                            <Accordion.Header>چرا پرفکت کد ؟</Accordion.Header>
                            <Accordion.Body>
                                اگر با تیم طراحی سایت پرفکت کد آشنایی داشته باشید میدونید که تنها چیزی که برای ما مهم است کیفیت ، کارایی و بروز بودن است که همین امر باعث برتری ما نسبت به بقیه شده است
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="faq-item">
                            <Accordion.Header>چطور میتونم با تیم پرفکت کد در زمینه برنامه نویسی همکاری داشته باشم ؟</Accordion.Header>
                            <Accordion.Body>
                                شما میتوانید از طریق پل های ارتباطی که در اختیار شما قراردادیم هماهنگی های لازم برای همکاری را انجام داده و پس از تایید توسط واحد جذب نیرو میتوانید در پروژه های ما همکاری داشته باشید
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="faq-box">
                    <Accordion>
                        <Accordion.Item eventKey="0" className="faq-item">
                            <Accordion.Header>کارآموزی پرفکت کد چگونه است ؟</Accordion.Header>
                            <Accordion.Body>
                                برای کاراموزی طراحی سایت پرفکت کد شما میتوانید از طریق پل های ارتباطی با ما در ارتباط باشید
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="faq-item">
                            <Accordion.Header>چطور میتونم سفارش خودم رو ثبت کنم ؟</Accordion.Header>
                            <Accordion.Body>
                                برای ثبت سفارش طراحی سایت در پرفکت کد میتوانید از دو روش اقدام نمایید روش 1 : با تلفن های درج شده در سایت تماس بگیرید و سفارش خود را ثبت کنید . روش 2 : با پر کردن فرم ارتباط با ما برای مشاوران پیام بگذارید تا آنها در سریعترین زمان ممکن با شما تماس بگیرند
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    )

}

export default Faq