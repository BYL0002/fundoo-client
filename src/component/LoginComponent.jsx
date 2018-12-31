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
import SocialButton from './SocialButton';
import { GoogleLogin } from 'react-google-login';
// const config = require('../config/config');
// import SocialLogin from 'react-social-login';

// import CustomizedSnackbars from './SnackBarTheme';

const handleSocialLogin = (user) => {
    console.log('user', user)
}

const handleSocialLoginFailure = (err) => {
    console.error('err', err)
}


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
            text: "",
            isAuthenticated: false,
            user: null,
            token: ''
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

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    googleResponse = (e) => {
        console.log('google res',e);
    };

    onFailure = (error) => {
        this.setState({
            snackOpen: true,
            snackMessage: 'social login error'+error
        })
    }


    render() {

        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                    <GoogleLogin
                        onClick={this.googleResponse}
                        clientId="1094333084310-jjpvtc8dui543p8skrhhvotbe68rcenj.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />
                </div>
            );
        if (this.state.responseGot) return (<Redirect to="/dashboard" />)

        return (
            <div className="Form" >
                <div className="formHeader">
                    Log in<span className="beforeDashboardTitle" >Fundoo Notes</span>
                </div>
                <div  >
                    <TextField label={this.props.name} name="email" onChange={this.setValue} required autoFocus
                        className="emailTextFieldLoginPage" helperText={ this.state.email === "" ? this.state.text : ""} ></TextField>
                </div>
                <div >
                    <TextField className="passwordTextFieldLoginPage" label="Password" type={this.state.showpassword ? 'text' : 'password'} required
                        value={this.state.password} onChange={this.setValue} name="password" helperText={ this.state.password === "" ? this.state.text : ""}
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
                    <span className="CenterTextStyle" >Don't have account? </span>
                    <a className="links" href="/register"> <b>Register</b> </a>
                </div>

                <SocialButton
                    provider='google'
                    appId='1094333084310-jjpvtc8dui543p8skrhhvotbe68rcenj.apps.googleusercontent.com'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                >
                    Login with Gmail
                </SocialButton>

                {content}

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