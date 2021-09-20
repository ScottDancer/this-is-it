
// import React, { Component } from "react";
import React from 'react';
import { BrowserRouter as Router,
  Route,
  } from 'react-router-dom';
import homePage from './pages/homePage';
import './App.css';
// import { render } from '@testing-library/react';



function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={homePage} exact />
      </div>
    </Router>
  )
}

export default App;
