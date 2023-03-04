import React from 'react'
import './BlogPost.css'

const BlogPost = () => {
  return (
    <div className="blog-post">
       <div className="blog-date">
        <p>21 مرداد 1401</p>
        <p>------</p>
        <p>امیرعلی انصاری پور</p>
       </div>

       <div className="blog-title">
        <h1>
            فاکتور هایی که در رتبه بندی سایت تاثیر ندارند !
        </h1>
       </div>

       <p className="blog-description">
       اگر در حوزه سئو فعالیت دارید یا این که کسب و کاری دارید که یکی از کانال های بازاریابی شما سئو است، احتمالاً تا به حال فاکتورهای زیادی به گوشتان خورده است! البته این فاکتورها معمولاً فاکتورهایی هستند که در رتبه بندی سایت ها تاثیر دارند.
       </p>
    </div>
  )
}

export default BlogPost