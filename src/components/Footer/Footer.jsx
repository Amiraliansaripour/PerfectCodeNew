import React, { useContext } from 'react'
import { Parallax } from 'react-scroll-parallax';
import { BgBlur } from '../provider/ParallaxFooter';

const Footer = () => {
  const [parallaxFooter, setParallaxFooter] = useContext(BgBlur)
  return (
    <Parallax onProgressChange={(progress) => setParallaxFooter(progress >= 0.253540166780227 ? true : false)} onExit={() => setParallaxFooter(false)}>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#141A2A", borderTop: "1px solid #9499A6" }}
      >
        <div className="container p-4 pb-0" >
          <section>
            <div className="row">
              {/* 1 */}
              <div className="text-center col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-right text-uppercase mb-4 font-weight-bold ">پل های ارتباطی</h6>
                <p><i className="fa fa-envelope mr-3 "></i> perfectcode@gmail.com</p>
                <p><i className="fa fa-phone mr-3"></i> + 0912 222 5555</p>
                <p><i className="fa fa-print mr-3"></i> + 0912 800 9000</p>
              </div>


              <hr className="w-100 clearfix d-md-none" />
              {/* 2 */}
              <div className="text-center col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                {/* <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6> */}
                <p>
                  <a className="text-white">اعضای پرفکت</a>
                </p>
                <p>
                  <a className="text-white">نمونه کار های ما</a>
                </p>
                <p>
                  <a className="text-white">نظرات کاربران</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              {/* 3 */}
              <div className="text-center col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-right">
                {/* <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6> */}
                <p>
                  <a className="text-white">صفحه اصلی</a>
                </p>
                <p>
                  <a className="text-white">درباره ما</a>
                </p>
                <p>
                  <a className="text-white">تیم پرفکت</a>
                </p>
                <p>
                  <a className="text-white">تماس باما</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              {/* 4 */}
              <div className="text-center col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-center text-uppercase mb-4 font-weight-bold">
                  پرفکت کد
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2022 Copyright :
                  <a className="text-white" href="https://perfectcode.ir/"
                  > perfectcode.ir</a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* <!-- Facebook --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //  className="text-white"
                  role="button"
                ><i className="fa fa-facebook-f"></i></a>

                {/* <!-- Twitter --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //  className="text-white"
                  role="button"
                ><i className="fa fa-twitter"></i></a>

                {/* <!-- Google --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //  className="text-white"
                  role="button"
                ><i className="fa fa-google"></i></a>

                {/* <!-- Instagram --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //  className="text-white"
                  role="button"
                ><i className="fa fa-instagram"></i></a>
              </div>
            </div>
          </section>
          {/* <!-- Section: Copyright --> */}
        </div>
      </footer>
    </Parallax>
  )
}

export default Footer