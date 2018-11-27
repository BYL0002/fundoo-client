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
// import userService from '../service/user';

function Display(props) {
    return <h2>Hello {props.name} </h2>
}


class TextFieldPassword extends React.Component {
    constructor(props) {
        super(props);
        let stateVariable = props.name;
        this.state = {
            stateVariable : '',
            showpassword : false
        }
        this.setValue = this.setValue.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
    }

    setValue = (event) => {
        this.setState ({
            stateVariable : event.target.value
        })
        // userService.set(this.state.stateVariable);
        // userService.set1();
    }

    handleShowPassword() {
        this.setState ({
            showpassword : !this.state.showpassword
        })
    }

    get() {
        this.props.get(this.state.stateVariable);
    }

    render() {
        // console.log("sdcfvbn",this.state.showpassword);
        this.props.get(this.state.stateVariable);
        return (
            <div>
                <span><TextField label = "Password" name = {this.props.name} variant = "outlined" type = {this.state.showpassword ? 'text' : 'password'} 
                    value = {this.state.stateVariable} onChange = {this.setValue} 
                    InputProps = {{
                        endAdornment : (
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle Password Visibility" onClick={this.handleShowPassword} >
                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                    )}}
                /></span>
                <Display name = {this.state.stateVariable} />
                <button onClick = {this.get.bind(this)} >Click</button>
            </div>
        )
    }
}

/**
 * @exports TextFieldPassword component to get textfield for password as to increase reusability
 */
export default TextFieldPassword;