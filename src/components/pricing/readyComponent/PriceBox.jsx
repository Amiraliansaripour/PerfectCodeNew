import React from 'react'
import './PriceBox.css'
const PriceBox = ({ planName, bgColor, btnColor, logo, price, inCluded, marginTop ,text}) => {
    return (
        <div className={`price-box col-11 col-lg-4 mx-lg-1 mx-0 col-md-5 my-lg-0 my-4 ` + marginTop} style={{ backgroundColor: bgColor }}>
            <img src={logo} alt="پلن های طراحی سایت پرفکت کد" style={{ width: "100px" }} />
            <h2>{planName}</h2>
            <p>{text}</p>
            <button className={btnColor == "active" ? "with-active" : "btn-active"}>همین الان شروع کن</button>
            <div>
                {/* <h2>{price}میلیون تومان</h2> */}
                <h2>برای دریافت قیمت تماس بگیرید</h2>
                <h4 className='mt-3'><a href="tel:09925438078">09925438078</a></h4>
            </div>
            <div className="line"></div>
            <p><strong>درباره این پلن بدونید</strong></p>
            <div>
                <p><i className='fa fa-check'></i>&nbsp; ادمین پنل اختصاصی</p>
                <p><i className='fa fa-check'></i>&nbsp; ادمین پنل اختصاصی</p>
                <p><i className='fa fa-check'></i>&nbsp; ادمین پنل اختصاصی</p>
                <p><i className='fa fa-check'></i>&nbsp; ادمین پنل اختصاصی</p>
            </div>
            <button className={btnColor == "active" ? "with-active" : "btn-active"}>همین الان شروع کن</button>
        </div>
    )
}

export default PriceBox