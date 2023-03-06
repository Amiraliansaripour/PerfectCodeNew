import React from 'react'
import NotFound from './pages/NotFound/NotFound'
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';
import BlogPost from './components/blog/blogPost/BlogPost';
import ContactPage from './pages/ContactPage';
import SitesPage from './pages/SitesPage';



const routes = [
    { path: '/', exact: "true", element: <HomePage /> },
    { path: '/blog', exact: "true", element: <BlogPage /> },
    { path: '/blogpost', exact: "true", element:<BlogPost /> },
    { path: '/sites', exact: "true", element: <SitesPage /> },
    { path: '/about', exact: "true", element: <AboutUsPage /> },
    { path: '/pricing', exact: "true", element: <PricingPage /> },
    { path: '/contact', exact: "true", element: <ContactPage /> },

    { path: '*', element: <NotFound /> },
]
export default routes