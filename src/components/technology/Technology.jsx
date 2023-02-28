import './Technology.css'
import RaedyContactForm from './../readyContactForm/RaedyContactForm';
const Technology = () => {
    return (
        // TODO add Helmet react
        <>
            <div className="technology container content">
                <div className="row d-flex flex-row-reverse justify-content-center align-items-center p-4">
                    <div className="col-12 col-lg-6">
                        <img src="../assets/img/sample/arsha.png" alt="طراحی سایت ، طراحی سایت فروشگاهی" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                        <h1>طراحی سایت فروشگاهی</h1>
                        <div className='mt-4'>
                            <p className="text-muted"></p>
                            <strong>امروزه داشتن بستر فیزیکی برای فروش محصولات کافی نیست و همه باید لذت داشتن یک سایت و فروش محصولات به سراسر دنیا را تجربه کنند</strong>
                            <p className='mt-3'>تیم پرفکت کد اینجاس تا با مشاوره رایگان به شما در طراحی سایت فروشگاهی کمک کنه</p>
                        </div>
                        <button className='btn-active mt-4'>دریافت مشاوره رایگان</button>
                    </div>
                </div>
            </div>

            <div className='chevron-down-page'>
                <i className='fa fa-chevron-down'></i>
            </div>

            {/*  */}
            <RaedyContactForm tag='h2' title='ثبت سفارش طراحی سایت در پرفکت کد'/>
        </>
    )
}

export default Technology
