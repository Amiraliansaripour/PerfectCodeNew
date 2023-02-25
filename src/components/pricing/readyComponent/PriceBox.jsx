import React from 'react'
import './PriceBox.css'
const PriceBox = ({planName , bgColor , btnColor ,logo, price , inCluded}) => {
    return (
        <div className="price-box col-11 col-md-4 mx-md-2" style={{backgroundColor: bgColor}}>
            <img src={logo} alt="" style={{width:"100px"}} />

            <h2>{planName}</h2>

            <p>
            ما در تیم پرفکت کد قصد داریم با بروز ترین امکانات موجود سایت شمارو طراحی کنیم .
            </p>

            <button className={btnColor == "active" ? "with-active" : "btn-active"}>
                همین الان شروع کن
            </button>

            <div>
                <h2>
                    {price}میلیون تومان
                </h2>
            </div>

            <div className="line"></div>

            <p>
                <strong>درباره این پلن بدونید ؟</strong>
            </p>

            <ul style={{textAlign:"right",direction:"rtl"}}>
                <li>ادمین پنل اختصاصی</li>
                <li>ادمین پنل اختصاصی</li>
                <li>ادمین پنل اختصاصی</li>
                <li>ادمین پنل اختصاصی</li>
                <li>ادمین پنل اختصاصی</li>

            </ul>

            <button className={btnColor == "active" ? "with-active" : "btn-active"}>
                همین الان شروع کن
            </button>
        </div>
    )
}

export default PriceBox