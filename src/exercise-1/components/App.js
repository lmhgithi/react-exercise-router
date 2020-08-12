import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Profile from './Profile';
import About from './About';
import Product from './Product';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="header">
            <Link className='aboutLink' to="/about-us">About Us</Link>
            <Link className='profileLink' to="/my-profile">My Profile</Link>
            <Link className='productLink' to='/products'>Products</Link>
            <Link className='homeLink' to="/">Home</Link>
          </div>
          <div className="body">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/my-profile' component={Profile} />
              <Route exact path='/about-us' component={About} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/goods' component={Products} />
              <Route exact path='/products/:id' component={Product} />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
