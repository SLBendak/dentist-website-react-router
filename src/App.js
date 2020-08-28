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
import WidgetShow from './WidgetShow';
import Office from './Office';
import Facts from './Facts';
import Events from './Events';

function App() {
  const procedures = [
    "Deep Cleaning",
    "Oral Surgery",
    "Root Canal",
    "Crown",
    "Impants",
    "Fillings"
  ];
  return (
    <Router>
    {/* good practice to put div inside router to nest everything */}
      <div className="App">
      {/* Nav used to nest links on page */}
        <nav>
          <Link to="/">Go Back Home</Link>{" "}
          <Link to="/procedures">See Our Procedures</Link>{" "}
          <Link to="/contact">Contact Us</Link>{" "}
          <Link to="/office">Office</Link>
          <Link to="/facts">Facts</Link>
          <Link to="/events">Events</Link>
        </nav>
        {/* Establishing routes and component to display */}
        <Route exact path="/" component={Home}/>
        <Route path="/procedures" render={() => <Procedures procedures={procedures} />}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/widget/:id" render={(props) => <WidgetShow procedures={procedures} {...props} /> } /> 
        <Route path="/office" component={Office}/>
        <Route path="/facts" component={Facts}/>
        <Route path="/events" component={Events}/>
      </div>
    </Router>
  );
}

export default App;
