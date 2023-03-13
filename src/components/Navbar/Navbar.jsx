import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Responsive.css'
import './Navbar.css'
import { HashLink } from 'react-router-hash-link';

const sitesNav = [
    { href: '/sites', title: 'طراحی سایت فروشگاهی', visible: true },
    { href: '/sites', title: 'طراحی سایت رزومه ای', visible: true },
    { href: '/sites', title: 'طراحی سایت خبری', visible: false },
    { href: '/sites', title: 'طراحی سایت پزشکی', visible: false },
    { href: '/sites', title: 'طراحی سایت موزیک', visible: false },
]

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
                        <li><HashLink to="/about#ourTeam">تیم پرفکت</HashLink></li>
                        <li className='drop-down d-none'>
                            <Link to='/'><i className='fas fa-chevron-down small'></i>&nbsp;طراحی سایت</Link>
                            <div className='drop-down-item'>
                                <ul>

                                    {sitesNav.map((navItems) => (
                                        <Link to={navItems.href} className={!navItems.visible && 'd-none'}><li>{navItems.title}</li></Link>

                                    ))}
                                    {/* <Link to='/sites'><li>طراحی سایت رزومه ای</li></Link>
                                    <Link to='/sites'><li></li></Link>
                                    <Link to='/sites'><li>طراحی سایت پزشکی</li></Link>
                                    <Link to='/sites'><li>طراحی سایت موزیک</li></Link> */}
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