import React from 'react';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar';
import TopBarSearchComponent from './TobBarSearchComponent';
import AccountIconTopBar from './AccountIconTopBar';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import NoteService from '../service/NoteService';

const NoteServiceClass = require('../service/NoteServiceClass');
const NoteServiceClassObject = new NoteServiceClass.NoteServiceClass();

// const theme = createMuiTheme({

//   typography: {
//     useNextVariants: true,
//   },
//   overrides: {
//     MuiToolbar: {
//       root: {
//         boxShadow: 0
//       }
//     }
//   },
// })

class TopbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarOpenStatus: false,
      responseGot: false,
      TopHeader: "",
      isView: true,
      sideBarSelected: "Notes",
      label: []
    };

    this.refLabel = React.createRef();
  }

  handleSideBar() {
    this.setState({
      sidebarOpenStatus: !this.state.sidebarOpenStatus
    });

    this.props.getTopBarStatus(!this.state.sidebarOpenStatus);
  }

  handleNotesView() {
    this.setState({
      isView: !this.state.isView
    });
    this.props.notesView(!this.state.isView);
  }

  sideBarSelected = (sideBarSelected) => {
    this.setState({
      sideBarSelected: sideBarSelected
    })
    this.props.sideBarSelected(sideBarSelected);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    let request = {
      thread: "/labelDisplay",
      data: {
        userId: localStorage.getItem("userLoggedId")
      }
    }

    var self = this;

    NoteService.LabelsDisplay(request, (err, data) => {
      // console.log('daata', data);

      if (data !== null && data !== undefined) {
        self.setState({
          label: data
        })
        this.refLabel.current.getLabels(data);
      }
      else {
        this.refLabel.current.getLabels(this.state.label);
        self.setState({
          label: []
        })
      }
    });

  }

  resize() {
    // let currentScreenWidth = (window.innerWidth <= 760);
    // if (currentScreenWidth !== this.state.hideNav) {
    this.setState({
      sidebarOpenStatus: false
    });
    // }
  }

  refreshPage = () => {
    window.location.reload();
  }

  getLabelCreated = (label) => {

    let userLogin = localStorage.getItem("userLogged");

    let request = {
      thread: "/AddLabel",
      data: {
        sender: userLogin,
        userId: "",
        noteId: "",
        label: label
      }
    }

    NoteServiceClassObject.NotesUpdation(request, (err, data) => {
      console.log('data label get', data);
      if (data !== "") {
        this.setState({
          label: data
        })
      }
      else {
        this.setState({
          label: ""
        })
      }
    })

  }

  render() {

    if (this.state.responseGot) return <Redirect to="/" />
    return (
      <div>
        {/* <MuiThemeProvider theme={theme}> */}
        <AppBar position="fixed"  >
          <Toolbar className="appBar" >

            <div style={{ display: "flex", justifyContent: "space-between" }} >
              <div>

                <IconButton style={{ color: "black" }} aria-label="Open drawer" >
                  <MenuIcon onClick={this.handleSideBar.bind(this)} />
                </IconButton>

                <Sidebar stateOpen={this.state.sidebarOpenStatus}
                  sideBarSelected={this.sideBarSelected}
                  sideBarSelectedOnClick={this.state.sideBarSelected}
                  getLabelCreated={this.getLabelCreated}
                  ref={this.refLabel}
                  labels={this.state.label} />

              </div>
              <div>
                {this.state.sideBarSelected === "Notes" ? (
                  <div>
                    <img style={{ verticalAlign: "middle" }}
                      className="topBarFundooNotesImage"
                      src={require("../assets/images/noteImage.svg")} alt="noteImage" />
                    <span style={{ color: "black" }}> FundooNotes </span>
                  </div>
                ) : (
                    <div style={{ color: "black" }} >{this.state.sideBarSelected}</div>
                  )}

              </div>
            </div>

            <TopBarSearchComponent />
            <div style={{ display: "flex", justifyContent: "space-between" }}>

              <div style={{ display: "flex" }}>

                <img style={{marginRight:"10px"}} src={require("../assets/images/refresh.svg")} alt="Refresh" className="refreshButtonOnTop" onClick={this.refreshPage} />

                {this.state.isView ? (
                  <img src={require("../assets/images/gridNotes.svg")} alt="listView" className="cssClassNotesOnView" onClick={this.handleNotesView.bind(this)} />
                ) : (
                    <img src={require("../assets/images/listNotes.svg")} alt="listView" className="cssClassNotesOnView" onClick={this.handleNotesView.bind(this)} />
                  )}

              </div>
              <div>
                <AccountIconTopBar />
              </div>

            </div>

          </Toolbar>
        </AppBar>
        {/* </MuiThemeProvider> */}
      </div>
    );
  }
}

export default TopbarComponent;
