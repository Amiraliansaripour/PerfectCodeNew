import React from 'react'
import PriceBox from '../readyComponent/PriceBox'
import './Price.css'
const Price = () => {
    return (
        <section className='price container'>
            <div className='content'>
                <h1 className='d-flex justify-content-center'>قیمت طراحی سایت در پرفکت کد</h1>
                <strong className='w-100 text-center mx-auto'>ما با استفاده از به کار گیری نیرو های جوان و خوش سلیقه توانسته ایم با کیفیت ترین سایت هارا در اختیار مشتریان خود قرار دهیم و هم اکنون میتوانید تعرفه طراحی سایت در سال 1401 را مشاهده کنید</strong>
            </div>
            <div className='d-flex flex-column flex-wrap flex-lg-nowrap flex-md-row justify-content-evenly'>
                <PriceBox bgColor='#1d263b'
                    planName="لایت"
                    btnColor="gray"
                    logo="../assets/img/mosalas.png"
                    price="18"
                    marginTop='mt-lg-5'

                />
                <PriceBox bgColor='#1649FF'
                    planName="پیشرفته"
                    btnColor="active"
                    logo="../assets/img/3dmokab.png"
                    price="25"
                    translateY='translateY(-84px)'
                />
                <PriceBox bgColor='#1d263b'
                    planName="استاندارد"
                    btnColor="gray"
                    logo="../assets/img/marpich.png"
                    price="16"
                    marginTop='mt-lg-5'
                />

            </div>
        </section>
    )
}

export default Price