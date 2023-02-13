import React from 'react'
import Home from './components/Header/Home/Home'
import NotFound from './components/Header/NotFound/NotFound'



const routes = [
    {path:'/' , exact: "true", element:<Home />},
    {path:'*' ,element:<NotFound />},
]   
export default routes