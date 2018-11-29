/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 * @module component
 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, IconButton, InputAdornment, Button } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { loginService } from '../service/UserService';
import Promise from 'promise';
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
            valueReturned: false
        }
        this.setValue = this.setValue.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
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

    loginUser() {

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

    render() {

        let logUserToken = localStorage.getItem('userLogToken');
        // console.log('sfdfgf');
        
        // console.log(localStorage.getItem('userLogToken'));
        // console.log(logUserToken);        
        // if(logUserToken != null)
        // {
        //     return (<Redirect to="/dashboard" />)
        // }
        if (this.state.valueReturned) return (<Redirect to="/dashboard" />)

        return (
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
                {/* child component displaying entered value */}
                {/* <Display name = {this.state.password} /> */}
            </div>
        )
    }
}

/**
 * @exports LoginComponent component so as screens can import it
 */
export default LoginComponent;