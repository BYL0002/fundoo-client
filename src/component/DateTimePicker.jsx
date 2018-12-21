/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';
import { Popper, Paper } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import moment from 'moment';

const date = new Date();
let defaultDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
var defaultDateFormat = moment(defaultDate).format('YYYY-MM-DD');

let defaultTime = date.getHours() + ':' + date.getMinutes();
console.log('defaultTime----', defaultTime);


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
            dateSelected: defaultDateFormat,
            timeSelected: defaultTime,
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

    handleDateTimeSelection = (event) => {

        // console.log('selected date ',event.target.value );
        this.props.getDateTimePicked(event.target.value);
    }

    handleDateSelection = (event) => {
        this.setState({
            dateSelected: event.target.value
        })
        // console.log('selected date ', this.state.dateSelected);
        // console.log('selected date event ', event.target.value);
        this.props.getDateTimePicked(event.target.value+' '+this.state.timeSelected);
    }

    handleTimeSelection = (event) => {
        this.setState({
            timeSelected: event.target.value
        })
        console.log('selected time ', this.state.timeSelected);
        this.props.getDateTimePicked(this.state.dateSelected+' '+event.target.value);
    }

    render() {
        // eslint-disable-next-line
        return (
            <div>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="datePickerDiv" >
                                {/* <div >
                                    <Input className = "dateTimePicker" name = "dt" type = "datetime-local" onChange = {this.handleDateTimeSelection} />
                                </div> */}
                                
                                <div>
                                    <input defaultValue={defaultDateFormat} type="date" onChange={this.handleDateSelection} />
                                </div>
                                <div>
                                    <input defaultValue={defaultTime} type="time" onChange={this.handleTimeSelection} />
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <span onClick={this.handleShowDateTimePickerPopper("right")} >
                    <img className="reminderClock" src={require('../assets/images/clocktime.svg')} alt="clock" />
                    <span className="reminderTimeLabel" id={new Date()} >Pick date & time : </span>
                </span>
            </div>
        )
    }
}