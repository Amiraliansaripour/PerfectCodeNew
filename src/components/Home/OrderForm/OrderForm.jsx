import React from 'react'
import './OrderForm.css'
const OrderForm = () => {
    return (
        <section className="contact">
            <h2>ثبت اولیه سفارش</h2>
            <section className="contact-form">
                <div className="order-form">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">نام</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">ایمیل</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group mt-3">
                            <label for="exampleFormControlTextarea1">توضیحات</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="...  سایتی فروشگاهی با امکانات"></textarea>
                        </div>
                    </form>
                </div>
                <div className="cantact-details">
                    <h2>برای ارتباط با تیم پشتیبانی با ما در تماس باشید</h2>
                    <p>برای ثبت سفارش خود ، لطفا فقط با شماره های درج شده در سایت تماس بگیرید و یا فرم مربوط به ثبت سفارش را تکمیل کرده تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.
                        یا با شماره <span style={{color:"#1649FF"}}>09925438078</span> تماس حاصل فرمایید</p>
                </div>
            </section>
        </section>
    )
}

export default OrderForm