import Blog from '../components/blog/Blog'
import Helmet from 'react-helmet';

export default function BlogPage() {

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
