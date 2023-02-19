import React from 'react'
import NotFound from './pages/NotFound/NotFound'
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';



const routes = [
    {path:'/' , exact: "true", element:<HomePage />},
    {path:'/about' , exact: "true", element:<AboutUsPage />},
    {path:'*' ,element:<NotFound />},
]   
export default routes