/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';
import { Popper, Paper, Input } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const date = new Date();

/**
 * @description Class Component
 * @exports Class to render
 */
export default class DateTimePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
            dateSelected: date,
            timeSelected: date.getHours() + ":" + date.getMinutes(),
        }
    }

    handleShowDateTimePickerPopper = placement => event => {
        console.log('popper open :- ', this.state.open);

        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    }

    handleDateSelection = (event) => {
        this.setState({
            dateSelected : event.target.value
        })
        console.log('selected date ',event.target.value );
    }
// props.getDateTimePicked

    handleTimeSelection = (time) => {
        this.setState({
            timeSelected : time
        })
        // console.log('selected date ', this.state.timeSelected);
    }

    render() {
        return (
            <div>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="datePickerDiv" >
                                <div >
                                    <Input className = "dateTimePicker" type = "time" onChange = {this.handleDateSelection} />
                                </div>
                                <div>
                                    <Input type = "date" onChange = {this.handleTimeSelection} />
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <span onClick={this.handleShowDateTimePickerPopper("right")} >
                    <img className = "reminderClock" src={require('../assets/images/clocktime.svg')} alt="clock" />
                    <span className="reminderTimeLabel" id={new Date()} >Pick date & time : </span>
                </span>
            </div>
        )
    }
}