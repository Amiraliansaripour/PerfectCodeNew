import React, { useEffect } from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="notfound">
      <h1>404</h1>
      <p>صفحه ای که به دنبال آن بودید در دسترس نمی باشد </p>
      <Link to="/" className="btn-active mt-5">صفحه اصلی</Link>
      <img src="../assets/img/mosalas.png" alt="" className="obgects-img coins" />
      <img src="../assets/img/circle.png" alt="" className="obgects-img3 coins" />
      <img src="../assets/img/marpich.png" alt="" className="obgects-img2 coins" />
      <img src="../assets/img/3dmokab.png" alt="" className="obgects-img1 coins" />
    </section>
  )
}

export default NotFound