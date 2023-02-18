import React from 'react'
import './AboutUsOurProject.css'
const AboutUsOurProject = () => {
  return (
    <section className='content our-project d-flex flex-row-reverse justify-content-center align-items-center'>
      <div className='our-project-bg-img'></div>
      <div className=' our-project-desc d-flex flex-column align-item-self-start flex-end'>
        <h2 className='w-100 px-4'>سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>
        <p className='w-100 px-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابها .</p>
        <div className="line d-lg-none d-block"></div>
        <div className='our-project-number d-flex flex-row text-start align-self-end px-4  align-items-center'>
          
          <div className='me-5'>
            <h2 className='h4'>400</h2>
            <h2 className='h4'>389</h2>
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