import React, { useContext } from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax';
import { BgBlur } from '../provider/ParallaxFooter';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
  const [parallaxFooter, setParallaxFooter] = useContext(BgBlur)
  const parallax = useParallax({
    speed: 30,
  });
  const parallax1 = useParallax({
    speed: 7,
  });

  const parallax2 = useParallax({
    speed: 7,
  });

  return (
    <Parallax onProgressChange={(progress) => setParallaxFooter(progress => 0.353540166780227 ? true : false)} onExit={() => setParallaxFooter(false)}>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1D263B" }}
        ref={parallax.ref}
      >
        <div className="container p-4 pb-0" ref={parallax1.ref}>
          <section>
            <div className="row">
              {/* 1 */}
              <div className="text-center col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-right text-uppercase mb-4 font-weight-bold ">
                  پل های ارتباطی
                </h6>
                <p>
                  <i className="fa fa-envelope mr-3 "></i>&nbsp;
                  <a
                    href="mailto:perfectcodeteam@gmail.com"
                    className="text-mute"
                  >
                    perfectcode@gmail.com
                  </a>
                </p>
                <p>
                  <i className="fa fa-phone mr-3 ml-2"></i>&nbsp;
                  <a href="tel:09925438078" className="text-mute">
                    09925438078
                  </a>
                </p>
                <p>
                  <i className="fa fa-phone mr-3 ml-2"></i>&nbsp;
                  <a href="tel:09102442108" className="text-mute">
                    09102442108
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              {/* 2 */}
              <div className="text-center col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                {/* <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6> */}
                <p>
                  <HashLink to={"/about#ourTeam"}>اعضای پرفکت</HashLink>
                </p>
                <p>
                  <HashLink to={"/#samples"} className="text-mute">
                    نمونه کار های ما
                  </HashLink>
                </p>
                <p>
                  <HashLink to={"/#comments"} className="text-mute">
                    نظرات کاربران
                  </HashLink>
                </p>
                <p>
                  <HashLink to={"/contact#faq"} className="text-mute">
                    سوالات متداول
                  </HashLink>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              {/* 3 */}
              <div className="text-center col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-right">
                {/* <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6> */}
                <p>
                  <Link to="/" className="text-white">
                    صفحه اصلی
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-mute">
                    درباره ما
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-mute">
                    تیم پرفکت
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="text-mute">
                    تماس باما
                  </Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              {/* 4 */}
              <div className="text-center col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-center text-uppercase mb-4 font-weight-bold">
                  پرفکت کد
                </h6>
                <p>
                  تنها چیزی که برای تیم طراحی سایت پرفکت کد مهم است ، کیفیت ،
                  کارایی و بروز بودن است
                </p>
              </div>
            </div>
          </section>

          <section className="p-3 pt-0" ref={parallax2.ref}>
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2022 Copyright :
                  <a className="text-white" href="https://perfectcode.ir/">
                    {" "}
                    perfectcode.ir
                  </a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* <!-- Google --> */}
                <a
                  href="mailto:perfectcodeteam@gmail.com"
                  className="btn btn-outline-light btn-floating m-1"
                  //  className="text-white"
                  role="button"
                >
                  <i className="fa-brands fa-google"></i>
                </a>

                {/* <!-- Instagram --> */}
                <a
                  href="https://instagram.com/_u/perfectcode.ir"
                  className="btn btn-outline-light btn-floating m-1"
                  //  className="text-white"
                  role="button"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
          {/* <!-- Section: Copyright --> */}
        </div>
      </footer>
    </Parallax>
  );
}

export default Footer