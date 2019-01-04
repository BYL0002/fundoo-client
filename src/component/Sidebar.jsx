import React from 'react';
import AddLabel from './AddLabel';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { MenuItem } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({

    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 66,
                width: 280,
                background: 'white',
            }
        },
    },
})

class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            TabSelected: "",
            labelDialogStatus:false
        }

    }

    sideBarOptionSelected = (event) => {
        this.props.sideBarSelected(event.target.textContent);
    }

    labelDialogStatusTrue = () => {
        this.setState({
            labelDialogStatus: true
        })
    }

    labelDialogStatusFalse = () => {
        this.setState({
            labelDialogStatus: false
        })
    }

    render() {
        const sideItems = (
            <div>
                <MenuItem className="sideBarMenuItems" id={1} onClick={this.sideBarOptionSelected} >
                {/* {this.props.sideBarSelectedOnClick === 'Notes' ? style={{}} } > */}
                    <img className="sideBarImages" src={require('../assets/images/SideBarNoteImage.svg')} alt="note" />
                    <span className="sideBarText" >Notes</span>
                </MenuItem>
                <MenuItem onClick={this.sideBarOptionSelected} name="Reminder" className="sideBarMenuItems" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarReminderImage.svg')} alt="reminder" />
                    <span className="sideBarText" >Reminders</span>
                </MenuItem>
                <Divider />
                <MenuItem disabled>
                    <div style={{ float: "left" }} >LABELS</div>
                </MenuItem>
                <MenuItem className="sideBarMenuItems" onClick={this.labelDialogStatusTrue} name="Edit Labels" >
                    <AddLabel
                     labelDialogStatusFalse={this.labelDialogStatusFalse}
                      labelDialogStatus={this.state.labelDialogStatus} />
                </MenuItem>
                <Divider />
                <MenuItem className="sideBarMenuItems" onClick={this.sideBarOptionSelected} name="Archive" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarArchiveImage.svg')} alt="archive" />
                    <span className="sideBarText" >Archive</span>
                </MenuItem>
                <MenuItem className="sideBarMenuItems" onClick={this.sideBarOptionSelected} name="Trash" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarTrashImage.svg')} alt="trash" />
                    <span className="sideBarText" >Trash</span>
                </MenuItem>
                <MenuItem className="sideBarMenuItems" >
                    <span className="sideBarTextBottom" >Notes</span>
                    <span className="sideBarTextBottom" >Privacy</span>
                </MenuItem>
            </div>
        );
console.log('ABCD',this.state.labelDialogStatus);


        return (
            <div>
                <MuiThemeProvider theme={theme} >
                    <Drawer
                        variant="persistent"
                        open={this.props.stateOpen}
                    >
                        {sideItems}
                    </Drawer>
                </MuiThemeProvider>
            </div>
        );
    }
}

/**
 * @exports Sidebar class component
 */
export default Sidebar;