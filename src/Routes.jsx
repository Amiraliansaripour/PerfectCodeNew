import React from 'react'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import AboutUs from './components/aboutUs/AboutUs';



const routes = [
    {path:'/' , exact: "true", element:<Home />},
    {path:'/about' , exact: "true", element:<AboutUs />},
    {path:'*' ,element:<NotFound />},
]   
export default routes