import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="header-list">
            {/* logo */}
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">صفحه اصلی</Link></li>
                    <li><Link to="/team">تیم پرفکت</Link></li>
                    <li><Link to="/about">درباره ما</Link></li>
                    <li><Link to="/contact">تماس باما</Link></li>
                </ul>
            </div>
            <div className="join">
                <Link to="/contact">تماس باما</Link>
            </div>
        </div>
    )
}

export default Navbar