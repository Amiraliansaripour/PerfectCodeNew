import React from 'react'
import './Faq.css'

import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {

    return (
        <section className="faq">
            <h2>پرسش های متداول</h2>

            <div className="faq-container">
                <div className="faq-box">
                    <Accordion>
                        <Accordion.Item eventKey="0" className="faq-item">
                            <Accordion.Header>چرا پرفکت کد ؟</Accordion.Header>
                            <Accordion.Body>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="faq-item">
                            <Accordion.Header>چطور میتونم با تیم پرفکت کد در زمینه برنامه نویسی همکاری داشته باشم ؟</Accordion.Header>
                            <Accordion.Body>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="faq-item">
                            <Accordion.Header>کارآموزی پرفکت کد ؟</Accordion.Header>
                            <Accordion.Body>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="faq-item">
                            <Accordion.Header>چطور میتونم سفارش خودم رو ثبت کنم ؟</Accordion.Header>
                            <Accordion.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="faq-box">
                    <Accordion>
                        <Accordion.Item eventKey="0" className="faq-item">
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
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    )

}

export default Faq