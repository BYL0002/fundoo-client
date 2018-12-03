import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Typography, MenuItem, Menu } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core';


const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 64,
                width: 280,
                background: 'white'
            }
        }
    },
})

class TemporaryDrawer extends React.Component {

    render() {
        const sideItems = (
            <div>
                <MenuItem id = "SideBarMenuItemSpace">
                    <img className = "sideBarImages" src={require('../assets/images/SideBarNoteImage.svg')} alt="note"/>
                    <span className = "sideBarText" >Notes</span>
                </MenuItem>
                <MenuItem>
                    <img className = "sideBarImages" src = {require('../assets/images/SideBarReminderImage.svg')} alt = "reminder" />
                    <span className = "sideBarText" >Reminders</span>
                </MenuItem>
                <Divider/>
                <MenuItem>
                    <div style={{float:"left"}} className = "textAlignLeft" >LABELS</div>
                </MenuItem>
                <MenuItem>
                    <img className = "sideBarImages" src = {require('../assets/images/SideBarLabelImage.svg')} alt = "label" />
                    <span className = "sideBarText" >Edit Labels</span>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <img className = "sideBarImages" src = {require('../assets/images/SideBarArchiveImage.svg')} alt = "archive" />
                    <span className = "sideBarText" >Archive</span>
                </MenuItem>
                <MenuItem>
                    <img className = "sideBarImages" src = {require('../assets/images/SideBarTrashImage.svg')} alt = "trash" />
                    <span className = "sideBarText" >Trash</span>
                </MenuItem>
                <MenuItem>
                    <span className = "sideBarTextBottom" >Notes</span>
                    <span className = "sideBarTextBottom" >Privacy</span>
                </MenuItem>
            </div>
        );
        console.log("sidebar", this.props.stateOpen)
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
