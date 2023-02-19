import React from 'react'
import NotFound from './pages/NotFound/NotFound'
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';



const routes = [
    {path:'/blog' , exact: "true", element:<BlogPage />},
    {path:'/about' , exact: "true", element:<AboutUsPage />},
    {path:'/' , exact: "true", element:<HomePage />},
    {path:'*' ,element:<NotFound />},
]   
export default routes