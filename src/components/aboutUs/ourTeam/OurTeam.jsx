import React from 'react'
import './OurTeam.css'
import OurTeamBox from './readyComponent/OurTeamBox'

const OurTeam = () => {
    return (
        <section className='ourTeam row content d-flex justify-content-center align-items-center flex-row m-auto'>
            <div className='col-12 d-flex flex-column gap-5 mb-5'>
                <div className='text-center'>
                    <h2>درباره تیم ما</h2>
                    <strong>ما در تیم پرفکت قصد داریم با مجرب ترین افراد بیزینس شمارو به سمت و سوی دیگری ببریم با ما همراه باش</strong>
                </div>
                <div className='ourTeamBox d-flex justify-content-center flex-wrap gap-5 text-center'>
                    <OurTeamBox name='مهدی دومانلو' identity='برنامه نویس بک اند و فرانت' img='../assets/img/about-us/domanloo.jpg'  telegram='mhdi_1254' github='mhdix' phone='09925438078'/>
                    <OurTeamBox name='امیر علی انصاری پور' identity='برنامه نویس بک اند و فرانت' img='../assets/img/about-us/amirali.jpg' telegram='amiraliansaripor' github='Amiraliansaripour' phone='09102442108'/>
                    <OurTeamBox name='امیرحسین ثقفی' identity='برنامه نویس بک اند و فرانت' img='../assets/img/about-us/saqafi.jpg' telegram='' github='' phone=''/>
                    <OurTeamBox name='امیرحسین اصغری' identity='برنامه نویس بک اند و فرانت' img='../assets/img/about-us/asqari.jpg' telegram='' github='' phone=''/>
                </div>
            </div>
        </section>
    )
}

export default OurTeam