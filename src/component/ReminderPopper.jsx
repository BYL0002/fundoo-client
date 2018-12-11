/**
 * @description Popper Component for reminder
 * @author Yash
 * @since 8/12/18
 * @version 1.1
 */
import React from 'react';
import { MenuItem } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import DateTimePicker from './DateTimePicker';

/**
 * @description component to display popper for reminder in notes addition
 * @exports Class Component
 */
export default class ReminderPopper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl : null,
            open : false,
            placement : null,
            dateTimePicker : false
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

    setReminderOption = (event) => {
        let reminderSetValue = event.target.id;
        this.setState({
            open : !this.state.open,
            dateTimePicker : !this.state.dateTimePicker
        })
        console.log("id : - ", event.target.id);
        console.log("name :- ", event.target.value);
        
        this.props.getReminderChooseOption(reminderSetValue);
    }

    render() {
        return (
            <span>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="reminderPopperNoteAddCard"  >
                                <div >
                                    <MenuItem disabled >Reminder : </MenuItem>
                                    <MenuItem value = "10" >
                                        <span className="reminderTodayLabel" onClick = {this.setReminderOption} id = {new Date()} >Later Today : </span>8:00 PM
                                    </MenuItem>
                                    <MenuItem>
                                        <span className="reminderTomorrowLabel" onClick = {this.setReminderOption} id = {new Date()} >Tomorrow : </span>8:00 AM
                                    </MenuItem>
                                    <MenuItem>
                                        <span className="reminderWeekLabel" onClick = {this.setReminderOption} id = {new Date()} >Next Week : </span>Mon, 8:00 AM
                                    </MenuItem>
                                    <MenuItem>
                                        <DateTimePicker />
                                    </MenuItem>
                                    <MenuItem>
                                        <img src={require('../assets/images/locationOn.svg')} alt="location" />
                                        <span className="reminderLocationLabel" >Pick place : </span>
                                    </MenuItem>
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <img onClick={this.handleReminderOtion('bottom')} className="noteAddFeatureImages" src={require('../assets/images/reminder.svg')} alt="reminder" />
            </span>
        )
    }
}