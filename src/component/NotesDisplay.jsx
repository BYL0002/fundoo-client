/**
 * @description Component to display Notes
 * @author Yash
 * @since 8/12/18
 * @version 1.12
 */

import React from 'react';
import NoteService from '../service/NoteService';
import NoteCardDisplay from './NoteCardDisplay';
const NoteServiceClass = require('../service/NoteServiceClass');
const NoteServiceClassObject = new NoteServiceClass.NoteServiceClass();

export default class NotesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesDisplay: [],
            newNote: this.props.getNewNote,
            snackbarStatus: false,
            snackbarMessage: "Reminder!"
        }
    }

    // getBackGroundColor = (colorSelected, note) => {
    //     let newNotesArray = this.state.notesDisplay;
    //     console.log('note selected ---------', note);

    //     let request = {
    //         thread: "/updateNoteColor",
    //         data: {
    //             note: {
    //                 _id: note._id,
    //                 color: colorSelected
    //             }
    //         }
    //     }

    //     /**
    //      * @description This is for generic Updation
    //      */
    //     // NoteService.NotesUpdation(request);

    //     NoteServiceClassObject.NotesUpdation(request);

    //     for (let i = 0; i < newNotesArray.length; i++) {
    //         if (note._id === newNotesArray[i]._id) {
    //             newNotesArray[i].color = colorSelected

    //             this.setState({
    //                 notesDisplay: newNotesArray
    //             })
    //         }
    //     }
    // }

    // getReminder = (reminderSet, note) => {
    //     let newNotesArray = this.state.notesDisplay;
    //     console.log('reminder set', reminderSet);

    //     let request = {
    //         thread: "/updateNoteReminder",
    //         data: {
    //             note: {
    //                 _id: note._id,
    //                 reminder: reminderSet
    //             }
    //         }
    //     }

    //     NoteServiceClassObject.NotesUpdation(request);

    //     for (let i = 0; i < newNotesArray.length; i++) {
    //         if (note._id === newNotesArray[i]._id) {
    //             newNotesArray[i].reminder = reminderSet

    //             this.setState({
    //                 notesDisplay: newNotesArray
    //             })
    //         }
    //     }
    // }

    // getReminderRemoved = (note) => {
    //     let newNotesArray = this.state.notesDisplay;

    //     let request = {
    //         thread: "/updateNoteReminder",
    //         data: {
    //             note: {
    //                 _id: note._id,
    //                 reminder: ""
    //             }
    //         }
    //     }

    //     NoteServiceClassObject.NotesUpdation(request);

    //     for (let i = 0; i < newNotesArray.length; i++) {
    //         if (note._id === newNotesArray[i]._id) {
    //             newNotesArray[i].reminder = ""

    //             this.setState({
    //                 notesDisplay: newNotesArray
    //             })
    //         }
    //     }
    // }

    // getPin = (pinSet, note) => {
    //     let newNotesArray = this.state.notesDisplay;

    //     let request = {
    //         thread: "/updateNoteReminder",
    //         data: {
    //             note: {
    //                 _id: note._id,
    //                 pin: pinSet
    //             }
    //         }
    //     }

    //     NoteServiceClassObject.NotesUpdation(request);

    //     for (let i = 0; i < newNotesArray.length; i++) {
    //         if (note._id === newNotesArray[i]._id) {
    //             newNotesArray[i].pin = pinSet

    //             this.setState({
    //                 notesDisplay: newNotesArray
    //             })
    //         }
    //     }
    // }

    // getTrash = (trashSet, note) => {
    //     let newNotesArray = this.state.notesDisplay;

    //     let request = {
    //         thread: "/updateNoteReminder",
    //         data: {
    //             note: {
    //                 _id: note._id,
    //                 trash: trashSet
    //             }
    //         }
    //     }

    //     NoteServiceClassObject.NotesUpdation(request);

    //     for (let i = 0; i < newNotesArray.length; i++) {
    //         if (note._id === newNotesArray[i]._id) {
    //             newNotesArray[i].trash = trashSet

    //             this.setState({
    //                 notesDisplay: newNotesArray
    //             })
    //         }
    //     }
    // }

    // getArchive = (archiveSet, note) => {
    //     let newNotesArray = this.state.notesDisplay;

    //     let request = {
    //         thread: "/updateNoteReminder",
    //         data: {
    //             note: {
    //                 _id: note._id,
    //                 archive: archiveSet
    //             }
    //         }
    //     }

    //     NoteServiceClassObject.NotesUpdation(request);

    //     for (let i = 0; i < newNotesArray.length; i++) {
    //         if (note._id === newNotesArray[i]._id) {
    //             newNotesArray[i].archive = archiveSet

    //             this.setState({
    //                 notesDisplay: newNotesArray
    //             })
    //         }
    //     }
    // }

    addNewNote = (note) => {
        let newNotesArray = this.state.notesDisplay;
        newNotesArray.push(note);
        this.setState({
            notesDisplay: newNotesArray
        })
    }

    componentDidMount() {
        // console.log('localStorage.getItem("userLogged")------', localStorage.getItem("userLoggedId"));

        let request = {
            thread: "/noteDisplay",
            data: {
                userId: localStorage.getItem("userLoggedId")
            }
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
                    notesDisplay: []
                })
            }
        });

    }


    getUpdate = (request) => {
        NoteServiceClassObject.NotesUpdation(request);
    }

    render() {

        let pinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.pin === true) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
        });

        let unPinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.pin === false) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
        });

        return (

            <div className={this.props.sidebarStatus ? "NotesDisplayDivSidebarOpen" : "NotesDisplayDivSidebarClose"} >

                <div className={this.props.notesView ? "notesGridDisplayDiv" : "notesListDisplayDiv"} >

                    <div>
                        {(() => {
                            switch (this.props.sideBarSelected) {
                                case 'Notes':
                                    return (
                                        <div>
                                            {pinnedNotes}
                                            {unPinnedNotes}
                                        </div>
                                    );
                                case 'Reminders':
                                    return (
                                        <div>
                                            {pinnedNotes}
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })()}
                    </div>

                </div>
            </div>
        )
    }
}