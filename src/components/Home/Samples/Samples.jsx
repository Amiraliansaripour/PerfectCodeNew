import React from 'react'
import { Link } from 'react-router-dom'
import './Samples.css'
const Samples = () => {
  return (
    <section className="samples">
      <div className="sample-title">
        <h2>نمونه کار ها</h2>
        <Link to="/samples" className="btn-active">دیدن همه نمونه کارها</Link>
      </div>

      <div className="samples-slider">

        {/* Item */}
        <div className="samples-slide">

          <div className="sample-slide-title">
            <div className="sample-img-box">
              <Link to="/samples/2">
                <img src="../assets/sites/arsha.png" alt="" />
              </Link>
            </div>

            <div className="sample-slide-name">
              <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
              <p>شرکتی</p>
            </div>
          </div>
          <div className="sample-slide-description">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>

            <Link to="/samples/2">دیدن پیش نمایش نمونه کار</Link>
          </div>

        </div>

        {/* Item */}
        <div className="samples-slide">

          <div className="sample-slide-title">
            <div className="sample-img-box">
              <Link to="/samples/2">
                <img src="../assets/sites/arsha.png" alt="" />
              </Link>
            </div>

            <div className="sample-slide-name">
              <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
              <p>شرکتی</p>
            </div>
          </div>
          <div className="sample-slide-description">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>

            <Link to="/samples/2">دیدن پیش نمایش نمونه کار</Link>
          </div>

        </div>

        {/* Item */}
        <div className="samples-slide">

          <div className="sample-slide-title">
            <div className="sample-img-box">
              <Link to="/samples/2">
                <img src="../assets/sites/arsha.png" alt="" />
              </Link>
            </div>

            <div className="sample-slide-name">
              <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
              <p>شرکتی</p>
            </div>
          </div>
          <div className="sample-slide-description">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>

            <Link to="/samples/2">دیدن پیش نمایش نمونه کار</Link>
          </div>

        </div>

        {/* Item */}
        <div className="samples-slide">

          <div className="sample-slide-title">
            <div className="sample-img-box">
              <Link to="/samples/2">
                <img src="../assets/sites/arsha.png" alt="" />
              </Link>
            </div>

            <div className="sample-slide-name">
              <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
              <p>شرکتی</p>
            </div>
          </div>
          <div className="sample-slide-description">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>

            <Link to="/samples/2">دیدن پیش نمایش نمونه کار</Link>
          </div>

        </div>

        {/* Item */}
        <div className="samples-slide">

          <div className="sample-slide-title">
            <div className="sample-img-box">
              <Link to="/samples/2">
                <img src="../assets/sites/arsha.png" alt="" />
              </Link>
            </div>

            <div className="sample-slide-name">
              <Link to="/samples/2"><h3>سایت شرکت آرشا</h3> </Link>
              <p>شرکتی</p>
            </div>
          </div>
          <div className="sample-slide-description">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>

            <Link to="/samples/2">دیدن پیش نمایش نمونه کار</Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Samples