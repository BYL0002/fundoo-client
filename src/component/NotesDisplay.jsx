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


    addNewNote = (note) => {
        let newNotesArray = this.state.notesDisplay;
        newNotesArray.push(note);
        this.setState({
            notesDisplay: newNotesArray
        })
    }

    componentDidMount() {

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

    getUpdate = (request, note) => {

        let newNotesArray = this.state.notesDisplay;

        for (let i = 0; i < newNotesArray.length; i++) {
            if (newNotesArray[i]._id === note._id) {
                newNotesArray[i] = note
            }
        }

        this.setState({
            notesDisplay: newNotesArray
        })

        NoteServiceClassObject.NotesUpdation(request);

    }

    render() {
        let CheckPinnedNotesBoolean = (this.state.notesDisplay.map((note, index) => {
            let count = 0;
            if (note.pin === true) {
                return count++;
            }
            return count;
        }));
        console.log(CheckPinnedNotesBoolean);
        

        let pinnedNotes = (this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.pin === true) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
            return null;
        }));

        let unPinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.pin === false) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
            return null;
        });

        let reminderPinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.reminder !== "" && note.pin === true) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
            return null;
        });

        let reminderUnpinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.reminder !== "" && note.pin === false) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
            return null;
        });

        let archivePinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === true && note.pin === true) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
            return null;
        });

        let archiveUnpinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === true && note.pin === false) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
            return null;
        });

        let trashNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === true) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate} notesView={this.props.notesView} />
            }
            return null;
        });

        return (

            <div className={this.props.sidebarStatus ? "NotesDisplayDivSidebarOpen" : "NotesDisplayDivSidebarClose"} >

                <div>
                    {(() => {
                        switch (this.props.sideBarSelected) {
                            case 'Notes':
                                return (
                                    <div>
                                        {CheckPinnedNotesBoolean.length > 0 ? (
                                            <div>
                                                <span>Pinned</span>
                                                {pinnedNotes}
                                                <span>Others</span>
                                            </div>
                                        ) : (
                                                <div>
                                                </div>
                                            )}

                                        <div>
                                            {unPinnedNotes}
                                        </div>
                                    </div>
                                );
                            case 'Reminders':
                                return (
                                    <div>
                                        {reminderPinnedNotes}
                                        {reminderUnpinnedNotes}
                                    </div>
                                );
                            case 'Archive':
                                return (
                                    <div>
                                        {archivePinnedNotes}
                                        {archiveUnpinnedNotes}
                                    </div>
                                );
                            case 'Trash':
                                return (
                                    <div>
                                        {trashNotes}
                                    </div>
                                )
                            default:
                                return null;
                        }
                    })()}
                </div>

            </div>
        )
    }
}