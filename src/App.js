import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path = '/' component = {LoginScreen} />
            <Route path = '/register' component = {RegisterScreen} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
