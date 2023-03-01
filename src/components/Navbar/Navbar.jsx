import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Responsive.css'
import './Navbar.css'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <div>
            <div className="header-list">
                <Link to='/'>
                    <div className="logo">
                        <img src="../assets/img/logo/logo.png" alt="پرفکت کد" width='60' height='60' />
                    </div>
                </Link>
                <div className="links">
                    <ul className={navbar ? 'active' : ''} onClick={() => setNavbar(!navbar)}>
                        <li><Link to="/">صفحه اصلی</Link></li>
                        <li><Link to="/team">تیم پرفکت</Link></li>
                        <li className='drop-down'>
                            <Link to='/'><i className='fas fa-chevron-down small'></i>&nbsp;طراحی سایت</Link>
                            <div className='drop-down-item'>
                                <ul>
                                    <Link to='/sites'><li>طراحی سایت فروشگاهی</li></Link>
                                    <Link to='/sites'><li>طراحی سایت رزومه ای</li></Link>
                                    <Link to='/sites'><li>طراحی سایت خبری</li></Link>
                                    <Link to='/sites'><li>طراحی سایت پزشکی</li></Link>
                                    <Link to='/sites'><li>طراحی سایت موزیک</li></Link>
                                </ul>
                            </div>
                        </li>
                        <li><Link to="/about">درباره ما</Link></li>
                        <li><Link to="/contact">تماس باما</Link></li>
                        <li><Link to="/blog">بلاگ ها</Link></li>
                        <li className='close ' onClick={() => setNavbar(!navbar)}>
                            <i className='fa fa-remove'></i>
                        </li>
                    </ul>

                </div>
                <Link to="/contact">
                    <button className="btn-active contact-btn">
                        تماس باما
                    </button>
                </Link>
                <div className={`hamburger ${navbar ? 'active' : ''}`} onClick={() => setNavbar(!navbar)}>
                    <i className="fa fa-navicon"></i>
                </div>

                <div className={`navbar-background d-block d-md-none ${navbar == true ? 'd-block' : 'd-none'}`} onClick={() => setNavbar(false)}></div>

            </div>

            <div className={`navbar-background d-block d-md-none ${navbar == true ? 'd-block' : 'd-none'}`} onClick={() => setNavbar(false)}></div>
        </div>
    )
}

export default Navbar