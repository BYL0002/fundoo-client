import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import './App.css';
import LoginScreen from './screen/LoginScreen';
import SetPassword from './component/SetPassword';
import ForgotPassword from './component/ForgotPassword';
import Dashboard from './screen/Dashboard';
import Register from './component/Register';
import Favicon from 'react-favicon';

// import { Provider } from 'react-redux';
// import store from './redux/store';

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
<<<<<<< HEAD
  componentDidMount(){
    document.title = "FundooNotes"
  }
  render() {
    return (
      <div>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="1094333084310-jjpvtc8dui543p8skrhhvotbe68rcenj" 
        content="1094333084310-jjpvtc8dui543p8skrhhvotbe68rcenj.apps.googleusercontent.com" />
<<<<<<< HEAD
        <Favicon url = {require('../src/assets/images/google-keep.ico')} />
=======
        <Favicon url = {require('../src/assets/images/browserTileNote.ico')} />
>>>>>>> 9fb476a9dbcbc6e328ccacdb0057d188f3842ea2
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
=======
  componentDidMount() {
    document.title = "Fundoo Notes"
  }
  render() {
    return (
      // <Provider store={ store } >
        <div>
          <script src="https://apis.google.com/js/platform.js" async defer></script>
          <meta name="1094333084310-jjpvtc8dui543p8skrhhvotbe68rcenj"
            content="1094333084310-jjpvtc8dui543p8skrhhvotbe68rcenj.apps.googleusercontent.com" />
          <Favicon url={require('../src/assets/images/browserTileNote.ico')} />
          <Router>
            <div>
              <Route exact path='/' component={LoginScreen} />
              <Route path='/setpassword/:token' component={SetPassword} />
              <Route path='/forgotpassword' component={ForgotPassword} />
              <Route path='/register' component={Register} />
              <Route path='/dashboard' component={Dashboard} />
              {/* <PrivateRoute  path = '/' Component = {LoginScreen} /> */}
            </div>
          </Router>
        </div>
      // </Provider>
>>>>>>> d70eb1d72e6a69d913ab9fc978ca1b2fd445c754
    );
  }
}

export default App;