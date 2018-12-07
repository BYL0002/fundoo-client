import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { IconButton, createMuiTheme, MuiThemeProvider, Button } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import userService from '../service/UserService';
import {Redirect} from 'react-router-dom';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                top: '25px',
                marginLeft: '175px',
                padding: 0,
            }
        }
    }
}) 

class AccountIconTopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
            responseGot : false,
            userLogInEmailId : localStorage.getItem("userLogged"),
            userLogInName : localStorage.getItem("userLogName")
        };
        this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    }


    handleProfileMenuOpen = placement => event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    }

    handleLogout = () => {
        userService.logoutService()
          .then(res => {
            if (res) {
              this.setState({
                responseGot: true
              });
            }
          })
      }

    render() {
        if(this.state.responseGot) return <Redirect to = '/' />
        return (
            <MuiThemeProvider theme = {theme} >
            <div>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <div id = "popupTopBar" >
                                    <div>
                                        <div>
                                            <AccountCircle id = "accountIconPopperTopBar" />
                                        </div>
                                        <div  >
                                            <span className = 'userNameTopBarPopper' >{this.state.userLogInName} </span>
                                        </div>
                                        <div>
                                            <span className = 'emailIdTopBarPopper'>{this.state.userLogInEmailId}</span>
                                        </div>
                                        <div>
                                        <Button className="logoutButton" onClick={this.handleLogout.bind(this)}>Logout</Button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <IconButton
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen('bottom')}
                    color="inherit"

                >
                    <AccountCircle id = "accountIconTopBar"  />
                </IconButton>
            </div>
            </MuiThemeProvider>
        )
    }
}

export default AccountIconTopBar;