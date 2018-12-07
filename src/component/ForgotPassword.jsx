/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */
import React from 'react';
import { TextField, Button, IconButton, Snackbar, MuiThemeProvider } from '@material-ui/core';
import userService from '../service/UserService';
import { Redirect } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { TextFieldsBeforeDashboardTheme } from './ThemesComponent';
const theme = TextFieldsBeforeDashboardTheme;

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            responseGot: false,
            snackOpen: false,
            snackMessage: ""

        }
        this.setValue = this.setValue.bind(this);
    }

    setValue = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleclick() {
        if (this.state.email !== "") {

            // //for API
            // let request = {
            //     thread: "/forgotpassword",
            //     data: { email: this.state.email }
            // }

            //for Emitter
            let request = {
                thread: "/forgotPasswordEventEmitter",
                data: { email: this.state.email }
            }
            userService.forgotService(request)
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
        else {
            this.setState({
                snackOpen: true,
                snackMessage: "Email Left Empty"
            })
        }
    }

    render() {
        if (this.state.responseGot) return <Redirect to="/" />
        return (
            <div className="Form" >
                <MuiThemeProvider theme={ theme } >
                    <div className="formHeader">
                        Forgot Password<span className="beforeDashboardTitle" >Fundoo Notes</span>
                    </div>

                    <div>
                    </div>
                    <div>
                        <TextField label="Email" name="email" onChange={this.setValue} value={this.state.stateVariable} > </TextField>
                        <div>
                            <Button onClick={this.handleclick.bind(this)} variant="extendedFab" color="primary" >Submit</Button>
                        </div>
                        <div>
                            <span className="CenterTextStyle" >Remember old Password? </span><a className="links" href="/"> <b>Login</b> </a>
                        </div>
                    </div>
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
                        color="primary "
                        message={<span id="message-id">{this.state.snackMessage}</span>}
                        action={[
                            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleSnackClose} >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}

/**
 * @exports Textfield component to get textfield for normal input as to increase reusability
 */
export default ForgotPassword;