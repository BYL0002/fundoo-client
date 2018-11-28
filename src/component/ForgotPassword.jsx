/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */
import React from 'react';
import {TextField, Button} from '@material-ui/core';
import userService from '../service/UserService';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            email : ''
        }
        this.setValue = this.setValue.bind(this);
    }

    setValue = (event) => {
        this.setState ({
            email : event.target.value
        })
    }

    handleclick() {
        userService.forgotService(this.state.email);
    }

    render() {

        return (
            <div className = "Form" >
                <TextField label = "Email" name = "email" onChange = {this.setValue} value = {this.state.stateVariable} > </TextField>
                <div>
                <Button onClick = {this.handleclick.bind(this)} >Submit</Button>
                </div>
            </div>
        )
    }
}

/**
 * @exports Textfield component to get textfield for normal input as to increase reusability
 */
export default ForgotPassword;