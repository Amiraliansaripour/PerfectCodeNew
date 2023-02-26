import React from 'react'
import Price from './price/Price'
import { useEffect } from 'react';
import Helmet from 'react-helmet';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>پرفکت کد | تعرفه طراحی سایت</title>
                <meta name="description" content="تعرفه طراحی سایت سال 1401 در پرفکت کد" />
                <link rel="canonical" href="https://perfectcode.ir/pricing" />
            </Helmet>
            <Price />
        </>
    )
}

export default Pricing