import React from 'react'
import './AboutTeam.css'

const AboutTeam = () => {
    return (
        <section className='aboutTeam row content d-flex flex-md-row flex-sm-column-reverse justify-content-center align-items-center flex-row m-auto px-4'>
            <div className='col-12 col-md-5 d-flex flex-column gap-5 mb-5'>
                <div className='gap-3 d-flex flex-row-reverse d-flex justify-content-center align-items-center'>
                    <div className='aboutIcon d-flex justify-content-center align-items-center mb-3'>
                        <i className='fa fa-globe fs-4'></i>
                    </div>
                    <div className='d-flex flex-column align-items-end w-75'>
                        <h3>طراحی سایت خلاقانه</h3>
                        <p>تیم پرفکت کد بهترین طراحی و دیزاین های روزه دنیا را در اختیار کاربرانش قرار میدهد</p>
                    </div>
                </div>
                <div className='gap-3 d-flex flex-row-reverse d-flex justify-content-center align-items-center'>
                    <div className='aboutIcon d-flex justify-content-center align-items-center mb-3'>
                        <i className='fa fa-search fs-4'></i>
                    </div>
                    <div className='d-flex flex-column align-items-end w-75'>
                        <h3>خدمات سئو</h3>
                        <p>سئو در طراحی سایت یکی از مهم ترین ها است که ما در تیم پرفکت بهترین سئو را به شما ارائه خواهیم داد</p>
                    </div>
                </div>
                <div className='gap-3 d-flex flex-row-reverse d-flex justify-content-center align-items-center'>
                    <div className='aboutIcon d-flex justify-content-center align-items-center mb-3'>
                        <i className='fa fa-arrow-up fs-4'></i>
                    </div>
                    <div className='d-flex flex-column align-items-end w-75'>
                        <h3>بروز ترین تکنولوژی ها</h3>
                        <p>تیم پرفکت کد همیشه قصد دارد باکیفیت ترین خدمات را در کنار بروز ترین تکنولوژی ها را به کاربران خود ارائه دهد</p>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-5 d-flex flex-column align-items-end justifu-content-center gap-4'>
                <h2 className='mx-auto mx-md-0 text-md-end'>کیفیت بالا را از ما بخواهید</h2>
                <p>تیم طراحی سایت پرفکت کد با تکیه بر دانش و تجربه توانسته تعداد زیادی از افراد را جذب خود کند و چندین بیزینس را تحت پوشش خود قرار دهد و آنهارا سود آور کند <br /> تنها دلیل پیشرفت ما کیفیت بالای طراحی سایت با بروز ترین متد های روز دنیا و پوشش تمامی تکنولوژی ها با تمام سلایق است اگز شما ام دوست دارید پیشرفت خود را در کار بیشتر کنید از طریق دکمه ی پایین با ما در ارتباط باشید</p>
                <button className='btn-active mx-auto mx-md-0 mb-4 mb-md-0'>ارتباط با تیم پرفکت کد</button>
            </div>
        </section>
    )
}

export default AboutTeam