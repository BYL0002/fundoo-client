import React from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import userService from '../service/UserService';
import Sidebar from './Sidebar';

class TopbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarOpenStatus: false
    };
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

  handleSideBar() {
    console.log(this.state.sidebarOpenStatus);
    this.setState({
      sidebarOpenStatus: !this.state.sidebarOpenStatus
    })
  }
  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer" >
              <MenuIcon onClick={this.handleSideBar.bind(this)} />

            </IconButton>
            <Sidebar stateOpen={this.state.sidebarOpenStatus} />
            <Typography variant="h6" color="inherit" noWrap>
              Fundoo Notes
            </Typography>
            <Button onClick={this.handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

export default TopbarComponent;
