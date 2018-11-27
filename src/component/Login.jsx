/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */
import React from 'react';
import {TextField, IconButton, InputAdornment, FormControl, InputLabel, Input} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function Display(props) {
    return <h2>Hello {props.name} </h2>
}


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            showpassword : false
        }
        this.setValue = this.setValue.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
    }

    setValue = (event) => {
        this.setState ({
            password : event.target.value
        })
    }

    handleShowPassword() {
        this.setState ({
            showpassword : !this.state.showpassword
        })
    }

    render() {
        return (
            <div className = "Form">
                <TextField label = {this.props.name} variant = "outlined" onChange = {this.setValue} ></TextField>
                <TextField label = "Password" variant = "outlined" type = {this.state.showpassword ? 'text' : 'password'} 
                    value = {this.state.password} onChange = {this.setValue} 
                    InputProps = {{
                        endAdornment : (
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle Password Visibility" onClick={this.handleShowPassword} >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                    )}}
                />
                <Display name = {this.state.password} />
            </div>
        )
    }
}

export default Login;