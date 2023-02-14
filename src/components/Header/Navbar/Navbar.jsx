import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="header-list">
            {/* logo */}
            <div className="logo">
                <h1>Perfect</h1>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">صفحه اصلی</Link></li>
                    <li><Link to="/team">تیم پرفکت</Link></li>
                    <li><Link to="/about">درباره ما</Link></li>
                    <li><Link to="/contact">تماس باما</Link></li>
                </ul>
            </div>
            <div className="btn-active">
                <Link to="/contact">تماس باما</Link>
            </div>

            <div className='hamburger'>
                <i className='fa fa-navicon'></i>
            </div>
        </div>
    )
}

export default Navbar