import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import LoginScreen from './screen/LoginScreen';
import SetPassword from './component/SetPassword';
import ForgotPassword from './component/ForgotPassword';
import Dashboard from './screen/Dashboard';
import Register from './component/Register';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path = '/' component = {LoginScreen} />
            <Route path = '/setpassword/:token' component = {SetPassword} />
            <Route path = '/forgotpassword' component = {ForgotPassword} />
            <Route path = '/register' component = {Register} />
            <Route authed={this.state.authed} path = '/dashboard' component = {Dashboard} />
            <PrivateRoute path = '/' Component = {LoginScreen} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;