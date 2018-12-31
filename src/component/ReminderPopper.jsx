/**
 * @description Popper Component for reminder
 * @author Yash
 * @since 8/12/18
 * @version 1.1
 */
import React from 'react';
import { MenuItem } from '@material-ui/core';
// import { ClickAwayListener } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import DateTimePicker from './DateTimePicker';
import moment from 'moment';


let reminderValueSet;

/**
 * @description component to display popper for reminder in notes addition
 * @exports Class Component
 */
export default class ReminderPopper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
            datePick: "",
            timePick: ""
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

    handlePopperCloseOnOutsideClick = () => {
        this.setState({
            open: false,
        })
    }

    getDateTimePicked = (dateTimePick) => {
        this.setState({
            open: false
        })

        reminderValueSet = moment(dateTimePick).format('ddd Do MMM h:mm a');
        this.props.getReminderChooseOption(reminderValueSet, this.props.noteSelected);

    }

    setReminderOption = (event) => {
        let reminderChoosen = event.target.id;
        if (reminderChoosen === '1') {
            this.setState({
                open: false,
            })
            console.log('1');

            reminderValueSet = moment(moment.now()).format('ddd Do MMM 8:00 ');
            this.props.getReminderChooseOption(reminderValueSet + 'PM', this.props.noteSelected);
        }
        else if (reminderChoosen === '2') {

            this.setState({
                open: false,
            })
            console.log('2');

            reminderValueSet = moment().add(1, 'days').format('ddd Do MMM 8:00 ');

            this.props.getReminderChooseOption(reminderValueSet + 'AM', this.props.noteSelected);
        }
        else if (reminderChoosen === '3') {

            this.setState({
                open: false,
            })
            let dayNumber = (new Date().getDay());
            console.log('dayNumber', dayNumber);

            let day = 8 - dayNumber;
            console.log('3');

            reminderValueSet = moment().add(day, 'days').format('ddd Do MMM 8:00 ');
            this.props.getReminderChooseOption(reminderValueSet + 'AM', this.props.noteSelected);
        }

    }

    render() {
        return (
            <div>
                <img onClick={this.handleReminderOtion('bottom')} className="noteAddFeatureImages"
                    src={require('../assets/images/reminder.svg')} alt="reminder" 
                    />

                <Popper style={{ position: 'relative' }} className='reminderPopper' open={this.state.open} transition disablePortal
                anchorEl={this.state.anchorEl}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper   >
                                <div >
                                    <MenuItem disabled >Reminder : </MenuItem>
                                    <MenuItem className="reminderLabel" onClick={this.setReminderOption} id={1} >
                                        <span >Later Today : </span>
                                        <span>8:00 PM</span>
                                    </MenuItem>
                                    <MenuItem className="reminderLabel" onClick={this.setReminderOption} id={2} >
                                        <span>Tomorrow : </span>
                                        <span>8:00 AM</span>
                                    </MenuItem>
                                    <MenuItem className="reminderLabel" onClick={this.setReminderOption} id={3} >
                                        <span>Next Week : </span>
                                        <span>Mon, 8:00 AM</span>
                                    </MenuItem>
                                    <MenuItem>
                                        <DateTimePicker getDateTimePicked={this.getDateTimePicked} />
                                    </MenuItem>
                                    <MenuItem>
                                        <img src={require('../assets/images/locationOn.svg')} alt="location" />
                                        <span className="reminderLocationLabel" >Pick place : </span>
                                    </MenuItem>
                                </div>
                            </Paper>
                            </Grow>
                    )}
                </Popper>

                {/* <ClickAwayListener onClickAway={this.handlePopperCloseOnOutsideClick}> */}

                {/* </ClickAwayListener> */}
            </div>
        )
    }
}