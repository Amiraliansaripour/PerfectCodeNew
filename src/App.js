import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from './Routes';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => {
            return <Route path={route.path} element={route.element} exact={route.exact} key={index} />
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
