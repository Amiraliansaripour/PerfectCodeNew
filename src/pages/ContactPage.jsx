import Contact from "../components/Contact/Contact";
import { Helmet } from 'react-helmet';

export default function ContactPage() {
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