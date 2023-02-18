import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <section className="notfound">
      <h1>404</h1>
      <p>صفحه ای که به دنبال آن بودید در دسترس نمی باشد </p>
      <Link to="/" className="btn-active">صفحه اصلی</Link>

      
      <img src="../assets/stylingImage/mosalas.png" alt="" className="obgects-img coins" />
                    <img src="../assets/stylingImage/circle.png" alt="" className="obgects-img3 coins" />
                    <img src="../assets/stylingImage/marpich.png" alt="" className="obgects-img2 coins" />
                    <img src="../assets/stylingImage/3dmokab.png" alt="" className="obgects-img1 coins" />
    </section>
  )
}

export default NotFound