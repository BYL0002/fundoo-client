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

// const NoteServiceClassObject = NoteService.NoteServiceClass();

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

        let request = {
            thread: "/updateNote",
            data: {
                note: {
                    _id: note._id,
                    color: colorSelected
                }
            }
        }
        NoteService.NotesUpdation(request);
        // NoteServiceClassObject.NotesUpdation(request);

        for (let i = 0; i < newNotesArray.length; i++) {
            if (note._id === newNotesArray[i]._id) {
                newNotesArray[i].color = colorSelected

                // console.log('running status -----------', newNotesArray[i].color);

                this.setState({
                    notesDisplay: newNotesArray
                })
            }
        }
    }

    handleNoteEditingDialog = () => {
        this.setState({
            dialogStatus: !this.state.dialogStatus
        });
    }

    // handleCardSelected = (noteSelected) => {
    //     let newNotesArray = this.state.notesDisplay;
    //     console.log('color set in state in card select -------', this.state.colorSelect);
    //     for(let i = 0; i<newNotesArray.length; i++)
    //     {
    //         if(noteSelected._id === newNotesArray[i]._id){
    //             newNotesArray[i].color = noteSelected.color

    //             console.log('running status -----------', newNotesArray[i].color );


    //             this.setState({
    //                 notesDisplay:newNotesArray
    //             })        
    //         }
    //     }
    //     // noteSelected.color = this.state.colorSelect;

    // }

    getReminder = (reminderSet) => {
        return reminderSet;
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

                    {this.state.notesDisplay.map((option, index) => (

                        <div>
                            {option.pin ? (
                                <div>
                                    <div>
                                        <span>Pinned Notes</span>
                                    </div>
                                    <Card key={index} className={notesLayoutClass} >

                                        <div style={{ backgroundColor: option.color, width: "-webkit-fill-available" }} >
                                            <div className="noteCardDisplayTitle" >
                                                {option.title}
                                                <img src={require('../assets/images/unPinNote.svg')} alt="pin note"
                                                        className="pinNoteImage" onClick={this.handlePinning} />
                                                
                                            </div>
                                            <div className="noteCardDisplayDescription" >
                                                {option.description}
                                            </div>
                                            <div >
                                                <Chip
                                                    icon={<img className="reminderClock" src={require('../assets/images/clocktime.svg')} alt="reminderClock" />}
                                                    label={<span className="reminderShowOnCardText" >  {option.reminder} </span>}
                                                    onDelete
                                                    variant="outlined"
                                                    className="chipOnCardReminder"
                                                />
                                            </div>
                                            <div>
                                                <ReminderPopper getReminder={this.getReminder} noteSelected={option} />
                                                <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson" />
                                                <ColorSection getColor={this.getBackGroundColor} option={option} />
                                                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" />
                                                <ArchiveNote />
                                                <MoreOptions />
                                            </div>
                                        </div>


                                    </Card>
                                </div>
                            ) : (
                                    <div>
                                        <Card key={index} className={notesLayoutClass} >

                                            <div style={{ backgroundColor: option.color, width: "-webkit-fill-available" }} >
                                                <div className="noteCardDisplayTitle" >
                                                    {option.title}
                                                    <img src={require('../assets/images/pinNote.svg')} alt="pin note"
                                                    className="pinNoteImage" onClick={this.handlePinning} />

                                                </div>
                                                <div className="noteCardDisplayDescription" >
                                                    {option.description}
                                                </div>
                                                <div >
                                                    <Chip
                                                        icon={<img className="reminderClock" src={require('../assets/images/clocktime.svg')} alt="reminderClock" />}
                                                        label={<span className="reminderShowOnCardText" >  {option.reminder} </span>}
                                                        onDelete
                                                        variant="outlined"
                                                        className="chipOnCardReminder"
                                                    />
                                                </div>
                                                <div>
                                                    <ReminderPopper getReminder={this.getReminder} noteSelected={option} />
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