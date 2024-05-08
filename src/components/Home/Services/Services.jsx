import React from 'react'
import './Services.css'
import { useParallax } from 'react-scroll-parallax';
import ServiceBox from './readyComponent/ServiceBox';
const Services = () => {
    const parallax = useParallax({
        speed: 10,
    });
    return (
        <div className="services block" ref={parallax.ref}>
            <div className="services-title block-x">
                <div className=''>
                    <h2>خدمات پرفکت کد</h2>
                </div>
                <div>
                    <p className='w-100 mb-0'>کسب و کارتو به پرفکت کد بسپار</p>
                </div>
            </div>
            <div className="services-grid block-y">
                <div className="row box gap-5 justify-content-center mx-3 m-md-0">
                    <ServiceBox title='برند سازی' icon='fa fa-dragon' desc='برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند' />
                    <ServiceBox title='UI/UX طراحی' icon='fa fa-pencil' desc='باعث بهبود تجربه کاربری و رضایت مشتری می‌شود که در نهایت به افزایش تعداد کاربران یک برنامه یا سایت کمک می‌کند' />
                    <ServiceBox title='اپلیکیشن' icon='fa fa-mobile-alt' desc='امروزه اکثر کسب و کار ها اپلیکیشن های اختصاصی خود را راه اندازی می کنند تا همیشه و در هر زمان با مشتریان ارتباط برقرار کنند' />
                    <ServiceBox title='خدمات بازاریابی' icon='fab fa-servicestack' desc='بازاریابی و شناخت بازار هدف یکی از مهم ترین اهداف تیم ما بوده تا کسب و کار شما بتواند موفق عمل کند' />
                    <ServiceBox title='طراحی مدرن' icon='fa-solid fa-swatchbook' desc='طراحی به دنبال ایجاد یک تجربه کاربری بهتر برای کاربران است که با بهره‌گیری از تکنیک‌های طراحی مناسب و توجه به نیازهای کاربران، بهبود کیفیت و کارایی سایت و برند را فراهم می‌کند' />
                </div> 
            </div>
        </div>
    )
}

export default Services