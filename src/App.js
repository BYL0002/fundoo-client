import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import './App.css';
import LoginScreen from './screen/LoginScreen';
import SetPassword from './component/SetPassword';
import ForgotPassword from './component/ForgotPassword';
import Dashboard from './screen/Dashboard';
import Register from './component/Register';
import Favicon from 'react-favicon';

// const Auth = {
//   isAuth : false,
//   authenticate(cb) {
//     this.isAuth = true
//   },
//   signout(cb) {
//     this.isAuth = false
//   }
// }

// function PrivateRoute ({component: Component, authed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => ( 
//         authed === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/', state: {from: props.location}}} 
//   />)}
//     />
//   )
// }

class App extends Component {
  componentDidMount(){
    document.title = "Fundoo Notes"
  }
  render() {
    return (
      <div>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="1094333084310-jjpvtc8dui543p8skrhhvotbe68rcenj" 
        content="1094333084310-jjpvtc8dui543p8skrhhvotbe68rcenj.apps.googleusercontent.com" />
        <Favicon url = {require('../src/assets/images/note-circle.ico')} />
        <Router>
          <div>
            <Route exact path = '/' component = {LoginScreen} />
            <Route path = '/setpassword/:token' component = {SetPassword} />
            <Route path = '/forgotpassword' component = {ForgotPassword} />
            <Route path = '/register' component = {Register} />
            <Route path = '/dashboard' component = {Dashboard} />
            {/* <PrivateRoute  path = '/' Component = {LoginScreen} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;