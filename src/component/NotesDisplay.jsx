/**
 * @description Component to display Notes
 * @author Yash
 * @since 8/12/18
 * @version 1.12
 */

import React from 'react';
import { Card, Chip } from '@material-ui/core';
import NoteService from '../service/NoteService';
import ReminderPopper from './ReminderPopper';
import ColorSection from './ColorSection';
import ArchiveNote from './ArchiveNote';
import MoreOptions from './MoreOptions';
import PinNote from './PinNote';
// import NoteServiceClass from '../service/NoteServiceClass';
const NoteServiceClass = require('../service/NoteServiceClass');

const NoteServiceClassObject = new NoteServiceClass.NoteServiceClass();

let notesLayoutDiv, notesLayoutClass;
export default class NotesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesDisplay: []
        }
    }

    getBackGroundColor = (colorSelected, note) => {
        let newNotesArray = this.state.notesDisplay;
        console.log('note selected ---------', note);
        
        let request = {
            thread: "/updateNoteColor",
            data: {
                note: {
                    _id: note._id,
                    color: colorSelected
                }
            }
        }
        
        /**
         * @description This is for generic Updation
         */
        // NoteService.NotesUpdation(request);

        NoteServiceClassObject.NotesUpdation(request);

        for (let i = 0; i < newNotesArray.length; i++) {
            if (note._id === newNotesArray[i]._id) {
                newNotesArray[i].color = colorSelected

                this.setState({
                    notesDisplay: newNotesArray
                })
            }
        }
    }

    getReminder = (reminderSet, note) => {
        let newNotesArray = this.state.notesDisplay;

        let request = {
            thread: "/updateNoteReminder",
            data: {
                note: {
                    _id: note._id,
                    reminder : reminderSet
                }
            }
        }

        NoteServiceClassObject.NotesUpdation(request);

        for (let i = 0; i < newNotesArray.length; i++) {
            if (note._id === newNotesArray[i]._id) {
                newNotesArray[i].reminder = reminderSet

                this.setState({
                    notesDisplay: newNotesArray
                })
            }
        }
    }

    getPin = (pinSet, note) => {
        let newNotesArray = this.state.notesDisplay;

        let request = {
            thread: "/updateNoteReminder",
            data: {
                note: {
                    _id: note._id,
                    pin : pinSet
                }
            }
        }

        NoteServiceClassObject.NotesUpdation(request);

        for (let i = 0; i < newNotesArray.length; i++) {
            if (note._id === newNotesArray[i]._id) {
                newNotesArray[i].pin = pinSet

                this.setState({
                    notesDisplay: newNotesArray
                })
            }
        }
    }

    componentDidMount() {
        let request = {
            thread: "/noteDisplay"
        }

        var self = this;

        NoteService.NoteDisplay(request, (err, data) => {

            if (data !== null && data !== undefined) {
                self.setState({
                    notesDisplay: data
                })
            }
            else {
                self.setState({
                    message_display: []
                })
            }
        });
    }

    render() {
        let NotesDisplayDivClass;
        if (this.props.sidebarStatus) {
            NotesDisplayDivClass = "NotesDisplayDivSidebarOpen";
        }
        else {
            NotesDisplayDivClass = "NotesDisplayDivSidebarClose";
        }

        if (this.props.notesView) {
            notesLayoutDiv = "notesGridDisplayDiv";
            notesLayoutClass = "notesGridDisplayCard";
        }
        else {
            notesLayoutDiv = "notesListDisplayDiv";
            notesLayoutClass = "notesListDisplayCard";
        }

        return (
            <div className={NotesDisplayDivClass} >

                <div className={notesLayoutDiv} >

                    {/* <span className="pinnedNoteTitle" >Pinned Notes</span> */}

                    {this.state.notesDisplay.map((option, index) => (

                        <div key={index} >

                            {option.pin ? (
                                <div className="pinnedNoteDiv" >
                                    <Card className={notesLayoutClass} >

                                        <div style={{ backgroundColor: option.color, width: "-webkit-fill-available" }} >
                                            <div className="noteCardDisplayTitle" >
                                                {option.title}
                                                <PinNote noteSelected={option} getPin={this.getPin} getNotePin = {option.pin} />
                                                {/* <img src={require('../assets/images/unPinNote.svg')} alt="pin note"
                                                    className="pinNoteImage" onClick={this.handlePinning} /> */}

                                            </div>
                                            <div className="noteCardDisplayDescription" >
                                                {option.description}
                                            </div>

                                            {option.reminder === "" ? (
                                                <div>
                                                </div>
                                            ) : (
                                                    <div >
                                                        <Chip
                                                            icon={<img className="reminderClock" src={require('../assets/images/clocktime.svg')} alt="reminderClock" />}
                                                            label={<span className="reminderShowOnCardText" >  {option.reminder} </span>}
                                                            // onDelete={true}
                                                            variant="outlined"
                                                            className="chipOnCardReminder"
                                                        />
                                                    </div>
                                                )}

                                            <div>
                                                <ReminderPopper getReminderChooseOption={this.getReminder} noteSelected={option} />
                                                <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson" />
                                                <ColorSection getColor={this.getBackGroundColor} noteSelected={option} />
                                                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" />
                                                <ArchiveNote />
                                                <MoreOptions />
                                            </div>
                                        </div>

                                    </Card>
                                </div>
                            ) : (
                                    <div className="OtherNoteShowDiv" >
                                        <Card className={notesLayoutClass} >

                                            <div style={{ backgroundColor: option.color, width: "-webkit-fill-available" }} >
                                                <div className="noteCardDisplayTitle" >
                                                    {option.title}
                                                    <PinNote noteSelected={option} getPin={this.getPin} getNotePin = {option.pin} />
                                                    {/* <img src={require('../assets/images/pinNote.svg')} alt="pin note"
                                                        className="pinNoteImage" onClick={this.handlePinning} /> */}

                                                </div>
                                                <div className="noteCardDisplayDescription" >
                                                    {option.description}
                                                </div>
                                                {option.reminder === "" ? (
                                                    <div>
                                                    </div>
                                                ) : (
                                                        <div >
                                                            <Chip
                                                                icon={<img className="reminderClock" src={require('../assets/images/clocktime.svg')} alt="reminderClock" />}
                                                                label={<span className="reminderShowOnCardText" >  {option.reminder} </span>}
                                                                // onDelete
                                                                variant="outlined"
                                                                className="chipOnCardReminder"
                                                            />
                                                        </div>
                                                    )}
                                                <div>
                                                    <ReminderPopper getReminderChooseOption={this.getReminder} noteSelected={option} />
                                                    <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson" />
                                                    <ColorSection getColor={this.getBackGroundColor} option={option} />
                                                    <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" />
                                                    <ArchiveNote />
                                                    <MoreOptions />
                                                </div>
                                            </div>


                                        </Card>

                                    </div>

                                )}

                        </div>

                    ))}

                </div>

            </div>
        )
    }
}