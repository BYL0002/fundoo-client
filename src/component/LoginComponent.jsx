/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 * @module component
 */
import React from 'react';
import {TextField, IconButton, InputAdornment, Button} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import UserServices from '../service/UserService';

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
            email : '',
            password : '',
            showpassword : false
        }
        this.setValue = this.setValue.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
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

    loginUser() {
        UserServices.loginService(this.state.email, this.state.password );
    }

    render() {
        console.log('email : ', this.state.email);
        
        return (
            <div className="Form">
                <div>
                    <TextField className = "Textfields" label = {this.props.name} name = {this.props.name} onChange = {this.setValue} ></TextField>
                </div>
                <div>
                    <TextField label = "Password" type = {this.state.showpassword ? 'text' : 'password'} 
                        value = {this.state.password1} onChange = {this.setValue} name = "password"
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
                
                <div><a href="/register">Register</a>
                <Button onClick = {this.loginUser} >Login</Button></div>
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