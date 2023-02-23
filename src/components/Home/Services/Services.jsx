import React from 'react'
import './Services.css'
import { useParallax } from 'react-scroll-parallax';
import ServiceBox from './readyComponent/ServiceBox';
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
                <div className="row box gap-5 justify-content-center mx-3 m-md-0">
                    <ServiceBox title='برند سازی' icon='fa fa-anchor' desc='برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند' />
                    <ServiceBox title='برند سازی' icon='fa fa-anchor' desc='برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند' />
                    <ServiceBox title='برند سازی' icon='fa fa-anchor' desc='برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند' />
                    <ServiceBox title='برند سازی' icon='fa fa-anchor' desc='برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند' />
                    <ServiceBox title='برند سازی' icon='fa fa-anchor' desc='برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند' />
                    <ServiceBox title='برند سازی' icon='fa fa-anchor' desc='برندینگ و تاثیرگذاری در ذهن مخاطب همیشه حائز اهمیت بوده و تیم ما در این زمینه نیز به شما کمک می کند' />
                </div>
            </div>
        </div>
    )
}

export default Services