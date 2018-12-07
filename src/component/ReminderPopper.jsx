// import React from 'react';
// import { IconButton, MenuItem } from '@material-ui/core';
// import Popper from '@material-ui/core/Popper';
// import Fade from '@material-ui/core/Fade';
// import Paper from '@material-ui/core/Paper';

// /**
//  * @description react class component to render
//  */
// class ReminderPopper extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             anchorEl: null,
//             open: this.props.displayStatus,
//             placement: null,
//         };
//         this.handleReminderOtion = this.handleReminderOtion.bind(this);
//         this.handleFeatureClicked
//     }

//     handleReminderOtion = placement => event => {
//         console.log('receive value in props open ', this.props.displayStatus);
        
//         const { currentTarget } = event;
//         this.setState(state => ({
//             anchorEl: currentTarget,
//             open: state.placement !== placement || !state.open,
//             placement,
//         }));
//     }

//     handleFeatureClicked(event) {

//     }

//     render() {
//         return (
//             <div>
//                 <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
//                     {({ TransitionProps }) => (
//                         <Fade {...TransitionProps} timeout={350}>
//                             <Paper className = "reminderPopperNoteAddCard"  >
//                                 <div >
//                                     <MenuItem disabled >Reminder : </MenuItem>
//                                     <MenuItem>
//                                     <span className = "reminderTodayLabel" >Later Today : </span>8:00 PM
//                                     </MenuItem>
//                                     <MenuItem>
//                                     <span className = "reminderTomorrowLabel" >Tomorrow : </span>8:00 AM
//                                     </MenuItem>
//                                     <MenuItem>
//                                     <span className = "reminderWeekLabel" >Next Week : </span>Mon, 8:00 AM
//                                     </MenuItem>
//                                     <MenuItem>
//                                     <img src={require('../assets/images/clocktime.svg')} alt = "clock" />
//                                     <span className = "reminderTimeLabel" >Pick date & time : </span>
//                                     </MenuItem>
//                                     <MenuItem>
//                                     <img src = {require('../assets/images/locationOn.svg')} alt = "location" />
//                                     <span className = "reminderLocationLabel" >Later Todat : </span>
//                                     </MenuItem>
//                                 </div>
//                             </Paper>
//                         </Fade>
//                     )}
//                 </Popper>
//                 <img onClick={this.handleFeatureClicked} className="noteAddFeatureImages" src={require('../assets/images/reminder.svg')} alt="reminder" />
//             </div>
//         )
//     }
// }

// /**
//  * @exports class component
//  */
// export default ReminderPopper;