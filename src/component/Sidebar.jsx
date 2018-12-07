import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { MenuItem } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 66,
                width: 280,
                background: 'white',
            }
        },
        MuiMenuItem: {
            root: {
                marginTop: 8,
                marginBottom: 8,
                borderBottomRightRadius: 30,
                borderTopRightRadius: 30,
            },
            selected: {
                backgroundColor: 'yellow',
                selected: true,
            },
            gutters : {
                paddingLeft : 1,
                
            }
        }
    },
})

class TemporaryDrawer extends React.Component {

    constructor(props) {
        super([props]);
        this.state = {
            TabSelected: ""
        }

    }

    render() {

        const sideItems = (
            <div>
                <MenuItem >
                    <img className="sideBarImages" src={require('../assets/images/SideBarNoteImage.svg')} alt="note" />
                    <span className="sideBarText" >Notes</span>
                </MenuItem>
                <MenuItem onClick={this.getHeaderValue} name="Reminder" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarReminderImage.svg')} alt="reminder" />
                    <span className="sideBarText" >Reminders</span>
                </MenuItem>
                <Divider />
                <MenuItem disabled>
                    <div style={{ float: "left" }} className="textAlignLeft" >LABELS</div>
                </MenuItem>
                <MenuItem onClick={this.getHeaderValue} name="Edit Labels" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarLabelImage.svg')} alt="label" />
                    <span className="sideBarText" >Edit Labels</span>
                </MenuItem>
                <Divider />
                <MenuItem onClick={this.getHeaderValue} name="Archive" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarArchiveImage.svg')} alt="archive" />
                    <span className="sideBarText" >Archive</span>
                </MenuItem>
                <MenuItem onClick={this.getHeaderValue} name="Trash" >
                    <img className="sideBarImages" src={require('../assets/images/SideBarTrashImage.svg')} alt="trash" />
                    <span className="sideBarText" >Trash</span>
                </MenuItem>
                <MenuItem>
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
 * @exports TemporaryDrawer class component
 */
export default TemporaryDrawer;
