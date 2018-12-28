import React from 'react';
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
            TabSelected: ""
        }

    }


    sideBarOptionSelected = (event) => {
        console.log(event.target.textContent);
        
    }

    render() {

        const sideItems = (
            <div>
                <MenuItem className="sideBarMenuItems" id={1} onClick={this.sideBarOptionSelected} >
                    <img className="sideBarImages" src={require('../assets/images/SideBarNoteImage.svg')} alt="note" />
                    <span className="sideBarText" >Notes</span>
                </MenuItem>
                <MenuItem onClick={this.getHeaderValue} name="Reminder" className="sideBarMenuItems" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarReminderImage.svg')} alt="reminder" />
                    <span className="sideBarText" >Reminders</span>
                </MenuItem>
                <Divider />
                <MenuItem disabled>
                    <div style={{ float: "left" }} >LABELS</div>
                </MenuItem>
                <MenuItem className="sideBarMenuItems" onClick={this.getHeaderValue} name="Edit Labels" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarLabelImage.svg')} alt="label" />
                    <span className="sideBarText" >Edit Labels</span>
                </MenuItem>
                <Divider />
                <MenuItem className="sideBarMenuItems" onClick={this.getHeaderValue} name="Archive" >
                    <img className="sideBarImages" src={require('../assets/images/archiveImage.svg')} alt="archive" />
                    <span className="sideBarText" >Archive</span>
                </MenuItem>
                <MenuItem className="sideBarMenuItems" onClick={this.getHeaderValue} name="Trash" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarTrashImage.svg')} alt="trash" />
                    <span className="sideBarText" >Trash</span>
                </MenuItem>
                <MenuItem className="sideBarMenuItems" >
                    <span className="sideBarTextBottom" >Notes</span>
                    <span className="sideBarTextBottom" >Privacy</span>
                </MenuItem>
            </div>
        );

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