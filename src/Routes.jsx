import React from 'react'
import NotFound from './pages/NotFound/NotFound'
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';
import Contact from './components/Contact/Contact';



const routes = [
    { path: '/', exact: "true", element: <HomePage /> },
    { path: '/blog', exact: "true", element: <BlogPage /> },
    { path: '/about', exact: "true", element: <AboutUsPage /> },
    { path: '/pricing', exact: "true", element: <PricingPage /> },
    { path: '/contact', exact: "true", element: <Contact /> },

    { path: '*', element: <NotFound /> },
]
export default routes