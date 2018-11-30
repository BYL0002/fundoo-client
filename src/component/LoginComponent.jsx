/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 * @module component
 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, IconButton, InputAdornment, Button, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { loginService } from '../service/UserService';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import {snackBarVariantIcon, snackBar} from './ThemesComponent';
import App from '../App.js';

// child component to reflet entered value in textfield
// function Display(props) {
//     return <h2>Hello {props.name} </h2>
// }

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
            valueReturned: false,
            snackOpen : false,
            snackMessage : ""
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
    
        this.setState({ snackOpen : false });
      };

    loginUser() {

        if (this.state.email !== "") {
            if (this.state.password !== "") {
                const userDetails = {
                    email: this.state.email,
                    password: this.state.password
                }

                loginService(userDetails)
                    .then(res => {
                        if (res) {
                            this.setState({
                                valueReturned: true
                            });
                        }
                    })
            }
            else
            {
                this.setState({
                    snackOpen : true,
                    snackMessage : "Password Empty"
                });
            }
        }
        else 
        {
            this.setState({ 
                snackOpen : true,
                snackMessage : "Email Empty"
            });
        }
    }

    render() {
        if (this.state.valueReturned) return (<Redirect to="/dashboard" />)

        // const Icon = snackBarVariantIcon[variant];
        // const { classes, className, message, onClose, variant, ...other } = props;


        return (
            <MuiThemeProvider theme = {snackBar} >
            <div className="Form">
                <div>
                    <TextField className="Textfields" label={this.props.name} name="email" onChange={this.setValue} ></TextField>
                </div>
                <div>
                    <TextField label="Password" type={this.state.showpassword ? 'text' : 'password'}
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

                <div><a className="Links" href="/register">Register</a>
                    <Button onClick={this.loginUser} >Login</Button></div>
                <div>
                    <a className="Links" href="/forgotpassword">Forgot Password</a>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    variant = "error"
                    className = "errorSnackBar"
                    open={this.state.snackOpen}
                    autoHideDuration={6000}
                    onClose={this.handleSnackClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.snackMessage}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleSnackClose} >
                        <CloseIcon />
                        </IconButton>,
                    ]}
                />
                {/* child component displaying entered value */}
                {/* <Display name = {this.state.password} /> */}
            </div>
            </MuiThemeProvider>
        )
    }
}

/**
 * @exports LoginComponent component so as screens can import it
 */
export default LoginComponent;