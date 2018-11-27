import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import Dashboard from './screen/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path = '/' component = {LoginScreen} />
            <Route path = '/register' component = {RegisterScreen} />
            <Route path = '/dashboard' component = {Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
