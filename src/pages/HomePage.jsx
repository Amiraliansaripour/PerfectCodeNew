import Home from "../components/Home/Home";
import Helmet from 'react-helmet';

export default function HomePage() {

    return (
        <>
            <Helmet>
                <title>پرفکت کد | استارتاپ پرفکت کد | طراحی سایت پرفکت کد</title>

                <meta name="description"
                    content="استارتاپ پرفکت کد در سال 1401 با تعداد پنج نفر از طراحان سایت ماهر در حیطه ی طراحی سایت ، UI UX ، سایت لاراول ، سایت ریئکت ، سایت جنگو شروع به کار کرده است"
                    data-rh="true" />
                <link rel="canonical" href="https://perfectcode.ir/" />
            </Helmet>
            <Home />
        </>
    )
}