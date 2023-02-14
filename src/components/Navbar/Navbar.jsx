import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navRef = useRef()
    const resMenu =() =>{
        navRef.current.classList.toggle("active")
    }
    return (
        <div className="header-list">
            {/* logo */}
            <div className="logo">
                <h1>Perfect</h1>
            </div>
            <div className="links">
                <ul ref={navRef}>
                    <li><Link to="/">صفحه اصلی</Link></li>
                    <li><Link to="/team">تیم پرفکت</Link></li>
                    <li><Link to="/about">درباره ما</Link></li>
                    <li><Link to="/contact">تماس باما</Link></li>
                    <li className='close' onClick={resMenu}>
                        <i className='fa fa-remove'></i>
                    </li>
                </ul>
            </div>
            <div className="btn-active contact-btn">
                <Link to="/contact">تماس باما</Link>
            </div>

            <div className="hamburger" onClick={resMenu}>
                <i className="fa fa-navicon"></i>
            </div>
        </div>
    )
}

export default Navbar