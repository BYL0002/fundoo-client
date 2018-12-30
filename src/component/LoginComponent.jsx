/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 * @module component
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, IconButton, InputAdornment, Button, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { loginService } from '../service/UserService';
const config = require('../config/config'); 
// import CustomizedSnackbars from './SnackBarTheme';

/**
 * @description LoginComponent class component for login
 */
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showpassword: false,
            redirectToReferrer: false,
            responseGot: false,
            snackOpen: false,
            snackMessage: "",
            snackBarVariant: "",
            text: ""
        }
        this.setValue = this.setValue.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
        this.handleSnackClose = this.handleSnackClose.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    /**
     * @description method to set value of state variables
     */
    setValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    /**
     * @description method to set value of password to display or not
     */
    handleShowPassword() {
        this.setState({
            showpassword: !this.state.showpassword
        })
    }

    handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ snackOpen: false });
    };

    loginUser() {

        if (this.state.email !== "") {
            if (this.state.password !== "") {

                let request = {
                    thread: "/login",
                    data: {
                        email: this.state.email,
                        password: this.state.password
                    }
                }
                loginService(request, (err, data) => {
                    if (err === false) {
                        this.setState({
                            responseGot: data,
                            snackOpen: true,
                            snackMessage: 'Error Occured, Try Later'
                        })
                    }
                    else {
                        this.setState({
                            responseGot: data
                        })
                    }
                })
            }
            else {
                this.setState({
                    snackOpen: true,
                    snackMessage: "Password Empty",
                    text: "Password Empty"
                });
            }
        }
        else {
            this.setState({
                snackOpen: true,
                snackMessage: "Email Empty",
                text: "Email Empty"
            });
        }
    }

    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/platform.js?onload=init";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();    
    }
    
    init() {
        window.gapi.load('auth2', function() { console.log('init auth called');
         });
      }

    //Triggering login for google
    googleLogin = () => {
        let response = null;
        window.gapi.auth2.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: config.google, //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    googleSignInCallback = (e) => {
        console.log( e )
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    this.getUserGoogleProfile( e["access_token"] )
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log(e.message);
                console.log('Import error - Error occured while importing data')
                return
            
            } else if (e.id) {
                //Profile data
                alert("Successfull login from google : "+ e.displayName )
                console.log( e );
                return;
            }
        }.bind(this));
    }
    
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;

        document.body.appendChild(script);
    }

    onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    render() {
        if (this.state.responseGot) return (<Redirect to="/dashboard" />)

        return (
            <div className="Form">
                <div className="formHeader">
                    Log in<span className="beforeDashboardTitle" >Fundoo Notes</span>
                </div>
                <div  >
                    <TextField label={this.props.name} name="email" onChange={this.setValue} required
                        className="emailTextFieldLoginPage" helperText={this.state.text} ></TextField>
                </div>
                <div >
                    <TextField className="passwordTextFieldLoginPage" label="Password" type={this.state.showpassword ? 'text' : 'password'} required
                        value={this.state.password} onChange={this.setValue} name="password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="Toggle Password Visibility" onClick={this.handleShowPassword} >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
                <div className="forgotPasswordLinkLocationLoginPage" >
                    <a className="links" href="/forgotpassword">Forgot <b>Password</b></a>
                </div>

                <div >
                    <Button fullWidth onClick={this.loginUser} variant='extendedFab'
                        color="primary" className="LoginSubmitButtons" >Login</Button></div>
                        <div>
                        <Button fullWidth variant='extendedFab'
                        color="primary" className="LoginSubmitButtons" onClick={ this.googleLogin} >g-login</Button></div>
                <div>
                    <span className="CenterTextStyle" >Don't have account? </span>
                    <a className="links" href="/register"> <b>Register</b> </a>
                </div>

                <div className="g-signin2" data-onsuccess="onSignIn"></div>
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.snackOpen}
                    autoHideDuration={6000}
                    onClose={this.handleSnackClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    color="primary"
                    variant="success"
                    message={<span id="message-id">{this.state.snackMessage}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleSnackClose} >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }
}

/**
 * @exports LoginComponent component so as screens can import it
 */
export default LoginComponent;