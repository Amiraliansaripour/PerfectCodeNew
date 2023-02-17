import React from 'react'
import './AboutUsOurProject.css'
const AboutUsOurProject = () => {
  return (
    <section className='content our-project d-flex flex-row-reverse justify-content-center align-items-center'>
      <div className='our-project-bg-img'></div>
      <div className=' our-project-desc d-flex flex-column align-item-self-start flex-end'>
        <h2 className='w-75'>سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>
        <p className='w-75'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابها .</p>
        <div className="line"></div>
        <div className='our-project-number d-flex flex-row text-start align-self-end'>
          
          <div className='me-5'>
            <h2>400</h2>
            <h2>389</h2>
          </div>
          <div className='text-end'>
            <h2>پروژه های تکمیل شده</h2>
            <h2>تعداد رضایت مشتریان</h2>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUsOurProject