import React from 'react';
// import TextFieldComponent from '../component/TextfieldComponent';
import { TextField, Button } from '@material-ui/core';
import userService from '../service/UserService';
import {Redirect} from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            name : "",
            responseGot : false
        }
        this.setValue = this.setValue.bind(this);
    }
    
    setValue(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleclick = () => {
        if(this.state.name !== "" && this.state.email !== "")
        {
            let request = {
                thread : "/registerUserVerify",
                data : {
                    name : this.state.name,
                    email : this.state.email
                }
            }
            
            userService.registerUserVerify(request)
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
            console.log('error');            
        }        
    }

    render() {
        if(this.state.responseGot) return <Redirect to = "/" />
        return (
            
            <div className = "Form" >
            <div className = "formHeader">
            Register<span className = "beforeDashboardTitle" >Fundoo Notes</span> 
            </div>
            <div className="inputTextBoxes">
                <TextField className="textFields" label = "Name" name = "name" onChange = {this.setValue} value = {this.state.name} ></TextField>
                <div>
                    <TextField className="textFields" label = "Email" name = "email" onChange = {this.setValue} value = {this.state.email} ></TextField>
                </div>
                <div>
                    <Button id = "registerButton" onClick = {this.handleclick.bind(this)} variant = "extendedFab" color="primary" >Submit</Button>
                </div>
                <div>
                <span className = "textStyle" >have an account? </span><a className = "registerLinkLoginPage" href="/"> <b>Login</b> </a>
                </div>
            </div>
            </div>
        )        
    }
}

export default Register;