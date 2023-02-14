import React from 'react'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'



const routes = [
    {path:'/' , exact: "true", element:<Home />},
    {path:'*' ,element:<NotFound />},
]   
export default routes