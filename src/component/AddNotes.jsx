import React from 'react';
import { Card, InputBase, Button, MenuItem } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

/**
 * @description AddNotes class component
 */
class AddNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleAddCard: false,
            anchorEl: null,
            open: false,
            placement: null,
        }
        this.handleReminderOtion = this.handleReminderOtion.bind(this);
    }

    handleReminderOtion = placement => event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    }

    handleAddNoteCardStatus(event) {
        this.setState({
            isToggleAddCard: !this.state.isToggleAddCard
        })
    }
    render() {
        return (
            <div>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className = "reminderPopperNoteAddCard"  >
                                <div >
                                    <MenuItem disabled >Reminder : </MenuItem>
                                    <MenuItem>
                                    <span className = "reminderTodayLabel" >Later Today : </span>8:00 PM
                                    </MenuItem>
                                    <MenuItem>
                                    <span className = "reminderTomorrowLabel" >Tomorrow : </span>8:00 AM
                                    </MenuItem>
                                    <MenuItem>
                                    <span className = "reminderWeekLabel" >Next Week : </span>Mon, 8:00 AM
                                    </MenuItem>
                                    <MenuItem>
                                    <img src={require('../assets/images/clocktime.svg')} alt = "clock" />
                                    <span className = "reminderTimeLabel" >Pick date & time : </span>
                                    </MenuItem>
                                    <MenuItem>
                                    <img src = {require('../assets/images/locationOn.svg')} alt = "location" />
                                    <span className = "reminderLocationLabel" >Later Todat : </span>
                                    </MenuItem>
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Card className="noteTakeCard" >
                    {this.state.isToggleAddCard ? (
                        <div className="completeNoteTakeCard" >
                            <div>
                                <InputBase className="inputNoteTake" placeholder="Title" />
                            </div>
                            <div>
                                <InputBase className="inputNoteTake" placeholder='Take a note' />
                            </div>
                            <div>
                                <img onClick={this.handleReminderOtion('bottom')} className="noteAddFeatureImages" src={require('../assets/images/reminder.svg')} alt="reminder" />
                                <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson" />
                                <img className="noteAddFeatureImages" src={require('../assets/images/color.svg')} alt="color" />
                                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" />
                                <img className="noteAddFeatureImages" src={require('../assets/images/archiveImage.svg')} alt="archive" />
                                <img className="noteAddFeatureImages" src={require('../assets/images/undo.svg')} alt="undo" />
                                <img className="noteAddFeatureImages" src={require('../assets/images/redo.svg')} alt="redo" />
                                <Button className="closeNoteAddCardButton" onClick={this.handleAddNoteCardStatus.bind(this)} >Close</Button>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <InputBase className="inputNoteTake" placeholder="Take a note .." onClick={this.handleAddNoteCardStatus.bind(this)} />
                            </div>
                        )
                    }
                </Card>
            </div>
        )
    }
}

/**
 * @exports AddNotes class component
 */
export default AddNotes;