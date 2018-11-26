import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path = '/' component = {LoginScreen} />
            <Route path = '/register' component = {LoginScreen} />
            <Route path = '/setpassword' component = {LoginScreen} />
            <Route path = '/dashboard' component = {LoginScreen} />
            <Route path = '/forgotpassword' component = {LoginScreen} />
            <Route path = '/emailverify' component = {LoginScreen} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
