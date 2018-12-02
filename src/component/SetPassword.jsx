/**
 * @description Register Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 * @module component
 */
import React from 'react';
import {TextField, IconButton, InputAdornment, Button} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import UserService from '../service/UserService';
// import SnackBarComponent from './SnackBarComponent';
import {Redirect} from 'react-router-dom';
/**
 * @description SetPassword class component for login
 */
class SetPassword extends React.Component {
    constructor(props) {
        super(props);
        let token = this.props.match.params.token;
        this.state = {
            password1 : '',
            password2 : '',
            showpassword : false,
            token : token,
            snackbarStatus : false,
            responseGot : false
        }
        this.setValue = this.setValue.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
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
        if (this.state.token !== "" && this.state.password1 !== "" && this.state.password2 !== "")
        {
            let request = {
                thread : "/register" ,
                data : {    
                    token : this.state.token,
                    password1 : this.state.password1,
                    password2 : this.state.password2
            } }
            console.log('safsdfdsfgdfghfghfghfghjhjghj');
            console.log(request);          
            
            UserService.registerService(request)
            .then(res => {
                if (res) {
                    this.setState({
                        responseGot: true
                    })
                }
                else {
                    this.setState({
                        snackOpen: true,
                        snackMessage: "Error Occured"
                    })
                }
            })
        }
        else
        {
            console.log();
            
            this.setState({
                snackbarStatus : true
            })
        }
        
    }

    render() {
        if(this.state.responseGot) return <Redirect to="/" />
        return (
            <div className = "Form">
            <div className = "formHeader">
            Set Password<span className = "beforeDashboardTitle" >Fundoo Notes</span> 
            </div>
                <TextField className = "textFields" label = "Password" type = {this.state.showpassword ? 'text' : 'password'} 
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
                <TextField className = "textFields" label = "Confirm Password" type = {this.state.showpassword ? 'text' : 'password'} 
                    value = {this.state.password2} onChange = {this.setValue} name = "password2"
                    InputProps = {{
                        endAdornment : (
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle Password Visibility" onClick={this.handleShowPassword} >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                    )}}
                />
                {/* <SnackBarComponent /> */}
            <div>
                <Button id = "setPasswordSubmitButton" onClick = {this.registerUser} variant = "extendedFab" color = "primary" >Register</Button>
            </div>
            </div>
        )
    }
}

/**
 * @exports SetPassword component so as screens can import it
 */
export default SetPassword;