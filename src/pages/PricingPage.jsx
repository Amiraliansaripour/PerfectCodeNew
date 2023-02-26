import Pricing from "../components/pricing/Pricing";
import { useEffect } from 'react';

export default function PricingPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Pricing />
    )
}