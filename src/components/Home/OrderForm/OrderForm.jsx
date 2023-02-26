import React from 'react'
import './OrderForm.css'
const OrderForm = () => {
    return (
        <section className="order-containar">
            <h2 className='text-end w-100 mb-lg-0 mb-5'>ثبت اولیه سفارش</h2>
            <section className="contact-form">
                <div className="order-form">
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
                        <button className="btn-active">ارسال</button>
                    </form>
                </div>
                <div className="cantact-details">
                    <h2 className='me-5 me-md-0'>برای ارتباط با تیم پشتیبانی با ما در تماس باشید</h2>
                    <p>برای ثبت سفارش خود ، لطفا فقط با شماره های درج شده در سایت تماس بگیرید و یا فرم مربوط به ثبت سفارش را تکمیل کرده تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.</p>
                    <p>همچنین میتوانید با شماره <span style={{ color: "#1649FF" }}>09925438078</span> تماس حاصل فرمایید</p>
                    <p>اولین سفارشت رو ثبت کن و از  20% تخفیف بهره مند شو<br /><span style={{ color: '#1649FF' }}> تیم ما همه جوره هواتو داره و نگران هیچ چیز نباش</span></p>

                </div>
            </section>
        </section>
    )
}

export default OrderForm