import AboutUs from "../components/aboutUs/AboutUs";
import Helmet from 'react-helmet';
import { useEffect } from "react";
export default function AboutUsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Helmet>
                <title>پرفکت کد | درباره ی تیم پرفکت کد</title>
                <meta name="description" content="اعضای اصلی تیم پرفکت کد عبارتند از امیرعلی انصارپور ، مهدی دومانلو ، امیرحسین ثقفی " />
                <link rel="canonical" href="https://perfectcode.ir/about" />
            </Helmet>
            <AboutUs />
        </>
    )
}