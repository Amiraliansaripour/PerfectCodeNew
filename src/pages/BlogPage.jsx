import Blog from '../components/blog/Blog'
import Helmet from 'react-helmet';
import { useEffect } from 'react';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>پرفکت کد | بلاگ</title>
        <meta name="description" content="بلاگ های طراحی سایت" />
        <link rel="canonical" href="https://perfectcode.ir/blog" />
      </Helmet>
      <Blog />
    </>
  )
}
