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
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import DateTimePicker from './DateTimePicker';
import moment from 'moment';


let reminderValueSet;
let date, dayIntegerValue, dayStringValue, month, time, dateObject = new Date();

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
        console.log(dateTimePick);

        // reminderValueSet = dateTimePick;
        // this.props.getReminderChooseOption(reminderValueSet, this.props.noteSelected);
        
    }

    setReminderOption = (event) => {
        let reminderChoosen = event.target.id;
        if (reminderChoosen === '1') {
            this.setState({
                open: false,
            })
            console.log('1');
            
            reminderValueSet = moment(moment.now()).format('ddd Do MMM 8:00 ');
            this.props.getReminderChooseOption(reminderValueSet+'pm', this.props.noteSelected);
        }
        else if (reminderChoosen === '2') {

            this.setState({
                open: false,
            })
            console.log('2');

            date = dateObject.getDate()+1;
            dayIntegerValue = dateObject.getDay()+1;

            switch(dayIntegerValue)
            {
                case 1: dayStringValue = "Sun";
                break;

                case 2: dayStringValue = "Mon";
                break;

                case 3: dayStringValue = "Tue";
                break;

                case 4: dayStringValue = "Wed";
                break;

                case 5: dayStringValue = "Thr";
                break;

                case 6: dayStringValue = "Fri";
                break;

                case 7: dayStringValue = "Sat";
                break;

                default : break;
            }
            
            reminderValueSet = moment().format(dayStringValue+' '+date+' MMM 8:00 ');
            
            this.props.getReminderChooseOption( reminderValueSet+'am' , this.props.noteSelected);
        }
        else {

            // this.setState({
            //     open: false,
            // })
            console.log('3');
            
            date = dateObject.getDate()+7;

            reminderValueSet = moment().format('dddd Do MMMM 8:00 ');
            this.props.getReminderChooseOption( reminderValueSet , this.props.noteSelected);
        }

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
                                    <MenuItem onClick={this.setReminderOption} id={1} >
                                        <span className="reminderTodayLabel" >Later Today : </span>8:00 PM
                                    </MenuItem>
                                    <MenuItem onClick={this.setReminderOption} id={2} >
                                        <span className="reminderTomorrowLabel" >Tomorrow : </span>8:00 AM
                                    </MenuItem>
                                    <MenuItem onClick={this.setReminderOption} id={3} >
                                        <span className="reminderWeekLabel" >Next Week : </span>Mon, 8:00 AM
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
                        </Fade>
                    )}
                </Popper>
                
                {/* <ClickAwayListener onClickAway={this.handlePopperCloseOnOutsideClick}> */}
                    <img onClick={this.handleReminderOtion('bottom')} className="noteAddFeatureImages" 
                    src={require('../assets/images/reminder.svg')} alt="reminder" />
                {/* </ClickAwayListener> */}
            </span>
        )
    }
}