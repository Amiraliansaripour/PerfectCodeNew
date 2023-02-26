import React from 'react'
import './OrderForm.css'
const OrderForm = () => {
    return (
        <section className="order-containar">
            <div className="order-title d-flex justify-content-center justify-content-lg-between">
                <div>
                    <h2 className='mb-4 mb-lg-0'>ثبت اولیه سفارش</h2>
                </div>
                <div>
                    <p className='w-100 ms-4 d-none d-lg-block'>اولین سفارش خودتو ثبت کن</p>
                </div>
            </div>
            <section className="contact-form w-100">
                <div className="order-form">
                    <form className='w-md-75 w-75'>
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
                        <button className="btn-active">ارسال</button>
                    </form>
                </div>
                <div className="cantact-details">
                    <h2 className=''>برای ارتباط با تیم پشتیبانی با ما در تماس باشید</h2>
                    <p>برای ثبت سفارش خود ، لطفا فقط با شماره های درج شده در سایت تماس بگیرید و یا فرم مربوط به ثبت سفارش را تکمیل کرده تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.</p>
                    <p>همچنین میتوانید با شماره <a href='tel:09925438078' style={{ color: "#1649FF" }}>09925438078</a> تماس حاصل فرمایید</p>
                    <p>اولین سفارشت رو ثبت کن و از  20% تخفیف بهره مند شو<br /><span style={{ color: '#1649FF' }}> تیم ما همه جوره هواتو داره و نگران هیچ چیز نباش</span></p>

                </div>
            </section>
        </section>
    )
}

export default OrderForm