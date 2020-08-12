import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home'
import Profile from './Profile';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="header">
            <Link className='aboutLink' to="/about-us">About Us</Link>
            <Link className='profileLink' to="/my-profile">My Profile</Link>
            <Link className='homeLink' to="/">Home</Link>
          </div>
          <div className="body">
            <Route exact path='/' component={Home} />
            <Route exact path='/my-profile' component={Profile} />
            <Route exact path='/about-us' component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
