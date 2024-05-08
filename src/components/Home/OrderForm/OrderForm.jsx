import React from 'react'
import './OrderForm.css'
import RaedyContactForm from './../../readyContactForm/RaedyContactForm';
const OrderForm = () => {
    return (
        <section className="order-containar block">
            <div className="order-title d-flex justify-content-center justify-content-lg-between">
                <div>
                   <h2 className=''>ثبت اولیه سفارش</h2>
                </div>
                <div>
                    <p className='w-100 mb-0 d-none d-lg-block'>اولین سفارش خودتو ثبت کن</p>
                </div>
            </div>
            <RaedyContactForm tag='h2' title='برای ثبت سفارش میتونی این فرم رو پر کنی' />
        </section>
    )
}

export default OrderForm