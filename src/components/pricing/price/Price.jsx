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
                    planName="نقره ای"
                    btnColor="gray"
                    logo="../assets/img/mosalas.png"
                    price="18"
                    marginTop='mt-lg-5'
                    text='پلن معمولی برای سایت های ساده و بیزینس های خانگی مناسب است'
                />
                <PriceBox bgColor='#1649FF'
                    planName="طلایی"
                    btnColor="active"
                    logo="../assets/img/3dmokab.png"
                    price="25"
                    translateY='translateY(-84px)'
                    text='پلن پیشرفته شامل تمامی تکنولوژی ها و استاندارد های روز دنیا میشود که مخصوص بیزینس های بزرگ و پیشرفته میشود'
                />
                <PriceBox bgColor='#1d263b'
                    planName="برنزی"
                    btnColor="gray"
                    logo="../assets/img/marpich.png"
                    price="16"
                    marginTop='mt-lg-5'
                    text='پلن برنزی شامل بیزینس های نیمه بزرگ میشود که تمامی امکانات پلن نقره ای را داراست'
                />

            </div>
        </section>
    )
}

export default Price