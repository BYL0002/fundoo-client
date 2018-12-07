import React from 'react';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar';
import TopBarSearchComponent from './TobBarSearchComponent';
import AccountIconTopBar from './AccountIconTopBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiToolbar: {
      paperAnchorLeft: {
        top: 64,
        width: 280,
      }
    }
  },
})

class TopbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarOpenStatus: false,
      responseGot: false,
      TopHeader: ""
    };
  }

  handleSideBar() {
    this.setState({
      sidebarOpenStatus: !this.state.sidebarOpenStatus
    })
  }
  render() {
    if (this.state.responseGot) return <Redirect to="/" />
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color = 'white' style = {{padding : "1px"}} >
            <Toolbar>
              <IconButton color="inherit" aria-label="Open drawer" >
                <MenuIcon onClick={this.handleSideBar.bind(this)} />
              </IconButton>
              <Sidebar stateOpen={this.state.sidebarOpenStatus} />
              Fundoo Notes
              <TopBarSearchComponent />
              <AccountIconTopBar />
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default TopbarComponent;
