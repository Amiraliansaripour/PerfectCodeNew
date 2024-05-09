import React from 'react'

const RaedyContactForm = ({ title, tag ,id}) => {
    return (
      <section className="contact block-y " id={id}>
        <div className="order-form-box">
          <form className='block'>
            <div className="form-group custom-form">
              <label htmlFor="name">* نام</label>
              <input
                type="text"
                className="form-control mt-3"
                id="name"
                placeholder=""
              />
            </div>
            <div className="form-group custom-form">
              <label htmlFor="email">* ایمیل</label>
              <input
                type="email"
                className="form-control mt-3"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="desc">توضیحات</label>
              <textarea
                className="form-control mt-3"
                id="desc"
                placeholder="...  سایتی فروشگاهی با امکانات"
                rows={5}
              ></textarea>
            </div>
            <button className="btn-active">ارسال</button>
          </form>
        </div>

        <div className="social-box">
          <div className="">
            {tag == "h1" ? (
              <h1 className="mb-4">{title}</h1>
            ) : (
              <h2 className="mb-4">{title}</h2>
            )}
            <p>
              برای ثبت سفارش خود ، لطفا فقط با شماره های درج شده در سایت تماس
              بگیرید و یا فرم مربوط به ثبت سفارش را تکمیل کرده تا کارشناسان ما
              در اسرع وقت با شما تماس بگیرند.
            </p>
            {/* <p>
              همچنین میتوانید با شماره{" "}
              <a href="tel:09925438078" style={{ color: "#1649FF" }}>
                09925438078
              </a>{" "}
              تماس حاصل فرمایید
            </p> */}
            <p>
              {/* اولین سفارشت رو ثبت کن و از 20% تخفیف بهره مند شو
              <br /> */}
              <span style={{ color: "#1649FF" }}>
                {" "}
                تیم ما همه جوره هواتو داره و نگران هیچ چیز نباش
              </span>
            </p>
          </div>
          <div className="contact-icon mt-4">
            <a
              href="https://t.me/perfectcodeteam"
              target="_blank"
              className="d-flex align-items-center gap-3"
            >
              <i className="fa-brands fa-telegram"></i> ارتباط در تلگرام
            </a>
          </div>

          <div className="contact-icon mt-3">
            <a
              href="https://instagram.com/_u/perfectcode.ir"
              target="_blank"
              className="d-flex align-items-center gap-3"
            >
              <i className="fa-brands fa-instagram"></i> ارتباط در اینستا
            </a>
          </div>
          <div className="contact-icon mt-3">
            <a
              href="tel:09925438078"
              className="d-flex align-items-center gap-3"
            >
              <i className="fa fa-phone"></i> برقراری تماس
            </a>
          </div>

          {/* <div className="contact-social">
                <p>با ما در ارتباط باشید : </p>
                <a href="tel:09925438078">
                    <i className="fa fa-phone"></i>
                </a>

                <a target='_blank' href="https://instagram.com/_u/perfectcode.ir">
                    <i className="fa-brands fa-youtube"></i>
                </a>

                <a target='_blank' href="https://github.com/">
                    <i className="fa-brands fa-github"></i>
                </a>

                <a target='_blank' href="https://telegram.com/perfectcodeteam">
                    <i className="fa-brands fa-telegram"></i>
                </a>
            </div> */}
        </div>
      </section>
    );
}

export default RaedyContactForm