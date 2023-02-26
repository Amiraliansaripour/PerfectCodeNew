import Contact from "../components/Contact/Contact";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Helmet>
                <title>پرفکت کد | ارتباط با تیم پرفکت کد</title>
                <meta name="description" content="ارتباط با پشتیبانی تیم پرفکت کد ، سوالات متداول طراحی سایت" />
                <link rel="canonical" href="https://perfectcode.ir/contact" />
            </Helmet>
            <Contact />
        </>
    )
}