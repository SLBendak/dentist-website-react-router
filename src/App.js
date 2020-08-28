import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Go Back Home</Link>{" "}
          <Link to="/procedures">See Our Procedures</Link>{" "}
          <Link to="/contact">Contact Us</Link>{" "}
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/procedures" component={Procedures}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
