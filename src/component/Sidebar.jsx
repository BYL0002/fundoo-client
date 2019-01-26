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
                width: 230,
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
            labelDialogStatus: false,
            labelName: "",
            labels: this.props.labels
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

    getLabelEdit = (labelName) => {
        this.setState({
            labelName: labelName
        })
    }

    getLabels = (labels) => {

        this.setState({
            labels: labels
        })
    }

    render() {

        const sideItems = (
            <div>
                <MenuItem className="sideBarMenuItems"
                    style={this.props.sideBarSelectedOnClick === "Notes" ? { backgroundColor: "#feefc3" } : {}}
                    id={1}
                    onClick={this.sideBarOptionSelected} >

                    <img className="sideBarImages"
                        src={require('../assets/images/SideBarNoteImage.svg')}
                        alt="note" />

                    <span >Notes</span>

                </MenuItem>

                <MenuItem onClick={this.sideBarOptionSelected}
                    name="Reminder" className="sideBarMenuItems"
                    style={this.props.sideBarSelectedOnClick === "Reminders" ? { backgroundColor: "#feefc3" } : {}} >

                    <img className="sideBarImages" src={require('../assets/images/SideBarReminderImage.svg')} alt="reminder" />
                    <span >Reminders</span>

                </MenuItem>
                <Divider />

                <MenuItem disabled>
                    <div style={{ float: "left" }} >LABELS</div>
                </MenuItem>

                {this.state.labels.map((option, index) => {

                    return <MenuItem key={index}
                        onClick={this.sideBarOptionSelected} name="Reminder"
                        className="sideBarMenuItems"
                        style={this.props.sideBarSelectedOnClick === option.labels ? { backgroundColor: "#feefc3" } : {}} >
                        <img className="sideBarImages" src={require('../assets/images/labelBullet.svg')} alt="labelBullet" />
                        <span >{option.labels}</span>
                    </MenuItem>
                })}

                <MenuItem className="sideBarMenuItems"
                    onClick={this.labelDialogStatusTrue}
                    name="Edit Labels" >

                    <AddLabel getLabelEdit={this.getLabelEdit}
                        getLabelCreated={() => this.props.getLabelCreated(this.state.labelName)}
                        labels={this.props.labels} />

                </MenuItem>
                <Divider />

                <MenuItem className="sideBarMenuItems"
                    onClick={this.sideBarOptionSelected} name="Archive"
                    style={this.props.sideBarSelectedOnClick === "Archive" ? { backgroundColor: "#feefc3" } : {}} >

                    <img className="sideBarImages" src={require('../assets/images/SideBarArchiveImage.svg')} alt="archive" />
                    <span >Archive</span>

                </MenuItem>


                <MenuItem className="sideBarMenuItems"
                    onClick={this.sideBarOptionSelected} name="NotesStat"
                    style={this.props.sideBarSelectedOnClick === "NotesStat" ? { backgroundColor: "#feefc3" } : {}} >

                    <img className="sideBarImages" src={require('../assets/images/SideBarArchiveImage.svg')} alt="NotesStat" />
                    <span >NotesStat</span>

                </MenuItem>

                <MenuItem className="sideBarMenuItems"
                    onClick={this.sideBarOptionSelected} name="Trash"
                    style={this.props.sideBarSelectedOnClick === "Trash" ? { backgroundColor: "#feefc3" } : {}} >

                    <img className="sideBarImages" src={require('../assets/images/SideBarTrashImage.svg')} alt="trash" />
                    <span >Trash</span>

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