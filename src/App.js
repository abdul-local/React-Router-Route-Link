import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from'./pages/Home'
import Premium from'./pages/Premium'
import Devschool from'./pages/Devschool'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">AbdulSchool</Link>
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/premium">Premium</Link>
              <Link className="nav-item nav-link" to="/devschool">Devschool</Link>
            </div>
          </nav>
          <Route path="/" exact component={Home}></Route>
          <Route path="/premium" component={Premium}></Route>
          <Route path="/devschool" component={Devschool}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
