import React from 'react'
import './AboutUsOurProject.css'
const AboutUsOurProject = () => {
  return (
    <section className='content our-project d-flex flex-row-reverse justify-content-center align-items-center'>
      <div className='our-project-bg-img'></div>
      <div className=' our-project-desc d-flex flex-column align-item-self-start flex-end'>
        <h2 className='w-100 px-4'>ممنون از همراهیتون</h2>
        <p className='w-100 px-4'>به لطف خداوند توانسته ایم تا الان وظیفه ی خود را به درستی انجام داده و نونی حلال سر سفره ببریم برای همین است که اکثر بیزینس ها به تیم پرفکت کد اعتماد کرده و پروژه های طراحی سایت خودشون رو به ما سپردن ، امیدوارم از این به بعد بتوانیم بیزینس های بیشتری را سود آور کنیم .<br /> پیشرفت کار شما ، باعث خوشحالی تیم ما میشود</p>
        <div className="line d-lg-none d-block"></div>
        <div className='our-project-number d-flex flex-row text-start align-self-end px-4  align-items-center'>
          
          <div className='me-5'>
            <h2 className='h4'>142</h2>
            <h2 className='h4'>142</h2>
          </div>
          <div className='text-end'>
            <h2 className='h4'>پروژه های تکمیل شده</h2>
            <h2 className='h4'>تعداد رضایت مشتریان</h2>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUsOurProject