import React from 'react'
import './Services.css'
import { useParallax } from 'react-scroll-parallax';
const Services = () => {
    const parallax = useParallax({
        speed: 10,
    });
    return (
        <div className="services" ref={parallax.ref}>
            <div className="services-title">
                <div>
                    <h2>خدمات پرفکت کد</h2>
                </div>
                <div>
                    <p>
                        برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند
                    </p>
                </div>
            </div>

            <div className="services-grid">
                <div className="row box gap-5 justify-content-center">
                    <div className="col-12 col-lg-3 col-md-5">
                        <div className="icon-box">
                            <i className="fa fa-anchor"></i>
                        </div>
                        <h3>برند سازی</h3>
                        <p>
                            برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند
                        </p>
                    </div>
                    <div className="col-12 col-lg-3 col-md-5">
                        <div className="icon-box">
                            <i className="fa fa-anchor"></i>
                        </div>
                        <h3>برند سازی</h3>
                        <p>
                            برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند
                        </p>
                    </div>
                    <div className="col-12 col-lg-3 col-md-5">
                        <div className="icon-box">
                            <i className="fa fa-anchor"></i>
                        </div>
                        <h3>برند سازی</h3>
                        <p>
                            برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند
                        </p>
                    </div>

                    <div className="col-12 col-lg-3 col-md-5">
                        <div className="icon-box">
                            <i className="fa fa-anchor"></i>
                        </div>
                        <h3>برند سازی</h3>
                        <p>
                            برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند
                        </p>
                    </div>
                    <div className="col-12 col-lg-3 col-md-5">
                        <div className="icon-box">
                            <i className="fa fa-anchor"></i>
                        </div>
                        <h3>برند سازی</h3>
                        <p>
                            برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند
                        </p>
                    </div>
                    <div className="col-12 col-lg-3 col-md-5">
                        <div className="icon-box">
                            <i className="fa fa-anchor"></i>
                        </div>
                        <h3>برند سازی</h3>
                        <p>
                            برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services