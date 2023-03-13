import Tooltip from 'rc-tooltip';
import React from 'react'
import { Link } from 'react-router-dom';
import { RWebShare } from "react-web-share";

const SampleBox = ({ img, name, categories, desc, link }) => {
    return (
        <div className="samples-slide">
            <div className="sample-slide-title">
                <div className="sample-img-box">
                    <Link to={link}>
                        <img src={img} alt={name} />
                    </Link>
                </div>
            </div>
            <div className="sample-slide-description">
                <div className="sample-slide-name">
                    <h3 className='pe-2'>{name}</h3>
                    <p>{categories}</p>
                </div>
                <p className='text-end'>{desc}</p>
                <div className='w-100 mt-3 d-flex justify-content-between align-items-center border-0 btn disabled'>
                    <Link to={link}>پیش نمایش<i className="fa fa-angle-double-left "></i></Link>
                    <RWebShare
                        data={{
                            text: "این یک نمونه کار از تیم پرفکت کد امیدوارم خوشتون بیاد",
                            url: `https://perfectcode.ir/sample/${link}/index.html`,
                            title: "Flamingos",
                        }}
                    >
                        <div className='share-btn'>
                            <Tooltip placement="bottom" trigger={['hover']} overlay={<span>اشتراک گذاری</span>}>
                                <Link><i className='fa fa-link m-0'></i></Link>
                            </Tooltip>
                        </div>
                    </RWebShare>
                </div>
            </div>
        </div>
    )
}

export default SampleBox