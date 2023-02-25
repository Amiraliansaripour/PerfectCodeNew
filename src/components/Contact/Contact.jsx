import React from 'react'
import './Contact.css'

const Contact = () => {
    return (

        <section className="contact">

            <div className="order-form-box">
                <form>
                    <div className="form-group custom-form">
                        <label for="name">* نام</label>
                        <input type="text" className="form-control mt-3" id="name" placeholder="" />
                    </div>
                    <div className="form-group custom-form">
                        <label for="email">* ایمیل</label>
                        <input type="email" className="form-control mt-3" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="form-group mt-3">
                        <label for="desc">توضیحات</label>
                        <textarea className="form-control mt-3" id="desc" placeholder="...  سایتی فروشگاهی با امکانات"></textarea>
                    </div>
                    <button>ارسال</button>
                </form>
            </div>

            <div className="social-box">
                <h2>تماس با ما</h2>
                <p>ما در تیم پرفکت کد قصد داریم با بروز ترین امکانات موجود سایت شمارو طراحی کنیم و به کسب و کار شما رونق ببخشیم ، تیم خبره ما هر آنچیزی </p>
                <div className="contact-icon">
                    <i className="fa fa-instagram"></i> <a>ارتباط در اینستاگرام</a>
                </div>
                <div className="contact-icon">
                    <i className="fa fa-instagram"></i> <a>ارتباط در اینستاگرام</a>
                </div>

                <div className="contact-social">
                    <a href="">
                        <i className="fa fa-instagram"></i>
                    </a>

                    <a href="">
                        <i className="fa fa-instagram"></i>
                    </a>

                    <a href="">
                        <i className="fa fa-instagram"></i>
                    </a>

                    <a href="">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact