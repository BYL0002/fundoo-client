import React from 'react';
import { Button, Avatar, ClickAwayListener } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import userService from '../service/UserService';
import { Redirect } from 'react-router-dom';

const imageUrl="";

class AccountIconTopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
            responseGot: false,
            userLogInEmailId: localStorage.getItem("userLogged"),
            userLogInName: localStorage.getItem("userLogName"),
            userLogImage : imageUrl
        };
        this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    }

    handlePopperCloseOnOutsideClick = () => {
        this.setState({
            open: false
        })
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
        if (this.state.responseGot) return <Redirect to='/' />
        return (
            <div>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <div id="popupTopBar" >
                                    <div>
                                        <div>
                                            {/* {imageUrl === "" ? (
                                                <Avatar id = "accountIconPopperTopBar" >{this.state.userLogInName[0] }</Avatar>
                                            ) : (
                                                // <AccountCircle id = "accountIconPopperTopBar" />
                                                <img src = {require( {imageUrl} ) } alt="userImage" />
                                            )} */}
                                            <Avatar id="userIconPopperTopBar" >{this.state.userLogInName[0]}</Avatar>
                                        </div>
                                        <div id="userDetailsAppBarPopper" >
                                            <div  >{this.state.userLogInName} </div>
                                            <div >{this.state.userLogInEmailId}</div>
                                            <Button className="logoutButton" onClick={this.handleLogout.bind(this)}>Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <ClickAwayListener onClickAway={this.handlePopperCloseOnOutsideClick} >
                    <Avatar onClick={this.handleProfileMenuOpen('bottom')}
                        style={{backgroundColor:"cadetblue"}} >{this.state.userLogInName[0]} </Avatar>
                </ClickAwayListener>
            </div>
        )
    }
}

export default AccountIconTopBar;