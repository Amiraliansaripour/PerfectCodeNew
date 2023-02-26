import React from 'react'
import Tooltip from 'rc-tooltip';

const OurTeamBox = ({ name, identity, img, telegram, phone, github }) => {
    return (
        <div className='box box-1 p-5 d-flex flex-column gap-2'>
            <img src={img} alt={`تیم پرفکت کد ${name}`} width='100' height='100' />
            <h3 className='mt-3'>{name}</h3>
            <p>{identity}</p>
            <div className='ourTeamsocial d-flex align-items-center justify-content-evenly'>

                <Tooltip placement="bottom" trigger={['hover']} overlay={<span>پیام در تلگرام</span>}>
                    <a href={`https://telegram.me/${telegram}`} target='_blank' className="btn-floating m-1" role="button">
                        <div className='ourTeamsocialItem d-flex justify-content-center align-items-center'>
                            <i className="fa fa-telegram"></i>
                        </div>
                    </a>
                </Tooltip>
                <Tooltip placement="bottom" trigger={['hover']} overlay={<span>برقراری تماس</span>}>
                    <a href={`tel:${phone}`} className="btn-floating m-1" role="button">
                        <div className='ourTeamsocialItem d-flex justify-content-center align-items-center'>
                            <i className="fa fa-phone"></i>
                        </div>
                    </a>
                </Tooltip>
                <Tooltip placement="bottom" trigger={['hover']} overlay={<span>مشاهده گیت هاب</span>}>
                <a href={`https://github.com/${github}`} target='_blank' className="btn-floating m-1" role="button">
                    <div className='ourTeamsocialItem d-flex justify-content-center align-items-center'>
                        <i className="fa fa-github"></i>
                    </div>
                </a>
                </Tooltip>
            </div>
        </div>
    )
}

export default OurTeamBox