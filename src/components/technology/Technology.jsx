import './Technology.css'
import RaedyContactForm from './../readyContactForm/RaedyContactForm';
import { HashLink } from 'react-router-hash-link';
import TechBox from './readyComponent/TechBox';
const Technology = () => {
    return (
        // TODO add Helmet react
        <>
            <TechBox img='../assets/img/sample/arsha.png' heading='طراحی سایت فروشگاهی' desc='امروزه داشتن بستر فیزیکی برای فروش محصولات کافی نیست و همه باید لذت داشتن یک سایت و فروش محصولات به سراسر دنیا را تجربه کنند' />

            <div className='chevron-down-page'>
                <HashLink to='/sites#tech-contact-form'><i className='fa fa-chevron-down'></i></HashLink>
            </div>

            {/* form */}
            <RaedyContactForm id='tech-contact-form' tag='h2' title='ثبت سفارش طراحی سایت در پرفکت کد' />
        </>
    )
}

export default Technology
