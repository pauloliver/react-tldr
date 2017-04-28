import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <ul>
            <li><Link to="lists">Lists</Link></li>
            <li><Link to="reverser">Lifted State</Link></li>
            <li><Link to="children">Children</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
