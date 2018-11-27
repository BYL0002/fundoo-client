/**
 * @description Register Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 * @module component
 */
import React from 'react';
import {TextField, IconButton, InputAdornment} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import UserService from '../service/UserService';

/**
 * @description RegisterComponent class component for login
 */
class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password1 : '',
            password2 : '',
            showpassword : false
        }
        this.setValue = this.setValue.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
    }

    /**
     * @description method to set value of state variables
     */
    setValue = (event) => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    /**
     * @description method to set value of password to display or not
     */
    handleShowPassword() {
        this.setState ({
            showpassword : !this.state.showpassword
        })
    }

    registerUser() {
        UserService.registerService(this.state.email, this.state.password1, this.state.password2);
    }

    render() {
        console.log('email : ', this.state.email);
        
        return (
            <div className = "Form">
                <TextField className = "Textfields" label = {this.props.name} name = {this.props.name} onChange = {this.setValue} ></TextField>
                <TextField label = "Password" type = {this.state.showpassword ? 'text' : 'password'} 
                    value = {this.state.password1} onChange = {this.setValue} name = "password1"
                    InputProps = {{
                        endAdornment : (
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle Password Visibility" onClick={this.handleShowPassword} >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                    )}}
                />
                <TextField label = "Confirm Password" type = {this.state.showpassword ? 'text' : 'password'} 
                    value = {this.state.password1} onChange = {this.setValue} name = "password2"
                    InputProps = {{
                        endAdornment : (
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle Password Visibility" onClick={this.handleShowPassword} >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                    )}}
                />
            </div>
        )
    }
}

/**
 * @exports RegisterComponent component so as screens can import it
 */
export default RegisterComponent;