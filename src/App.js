import React, { createContext, useState } from 'react'
import './App.css';
import './Responsive.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from './Routes';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxFooter from './components/provider/ParallaxFooter';


function App() {

  return (
    <ParallaxProvider>
      <ParallaxFooter>
        <div className="App">
          <Router>
            <Routes>
              {routes.map((route, index) => {
                return <Route path={route.path} element={route.element} exact={route.exact} key={index} />
              })}
            </Routes>
          </Router>
        </div>
      </ParallaxFooter>
    </ParallaxProvider>
  );
}

export default App;
