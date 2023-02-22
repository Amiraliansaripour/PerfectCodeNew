import React from 'react'
import PriceBox from '../readyComponent/PriceBox'
import './Price.css'
const Price = () => {
    return (
        <section className='price container'>
            <div className='content'>
                <h1 className='d-flex justify-content-center'>قیمت طراحی سایت در پرفکت کد</h1>
                <strong className='w-50 text-center mx-auto'>ما با استفاده از به کار گیری نیرو های جوان و خوش سلیقه توانسته ایم با کیفیت ترین سایت هارا در اختیار مشتریان هئد قرار دهیم و هم اکنون میتوانید تعرفه های طراحی سایت در سال 1401  را مشاهده کنید</strong>
            </div>
            <div className='d-flex flex-column flex-md-row justify-content-evenly'>
                <PriceBox bgColor='#1d263b' />
                <PriceBox bgColor='#1d263b' />
                <PriceBox bgColor='#1d263b' />
            </div>
        </section>
    )
}

export default Price