import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import LoginScreen from './screen/LoginScreen';
import SetPassword from './component/SetPassword';
import ForgotPassword from './component/ForgotPassword';
import Dashboard from './screen/Dashboard';
import Register from './component/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path = '/' component = {LoginScreen} />
            <Route path = '/setpassword/:token' component = {SetPassword} />
            <Route path = '/forgotpassword' component = {ForgotPassword} />
            <Route path = '/dashboard' component = {Dashboard} />
            <Route path = '/register' component = {Register} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;