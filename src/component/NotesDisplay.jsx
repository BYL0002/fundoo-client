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

const NewNoteServiceClass = require('../service/NewNoteServiceClass');
const NewNoteServiceClassObject = new NewNoteServiceClass.NewNoteServiceClass();

export default class NotesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesDisplay: null,
            newNote: this.props.getNewNote,
            snackbarStatus: false,
            snackbarMessage: "Reminder!",
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

    getUpdateImage = (request, note) => {

        console.log('req via props', request);
        
        NewNoteServiceClassObject.NotesUpdation(request, (err, data) => {
            if (err) {
                console.log("err", err);
            }
            else {
                console.log('data', data);

                // let newNotesArray = this.state.notesDisplay;

                // for (let i = 0; i < newNotesArray.length; i++) {
                //     if (newNotesArray[i]._id === data._id) {
                //         newNotesArray[i] = data
                //     }
                // }

                // this.setState({
                //     notesDisplay: newNotesArray
                // })
            }
        });

    }

    getNoteDeleted = (request, note) => {

        let newNotesArray = this.state.notesDisplay;

        for (let i = 0; i < newNotesArray.length; i++) {
            if (newNotesArray[i]._id === note._id) {
                newNotesArray.splice(i, i + 1);
            }
        }

        this.setState({
            notesDisplay: newNotesArray
        })

        NoteServiceClassObject.NotesUpdation(request);

    }

    render() {
        let count = 0;

        if (this.state.notesDisplay === null) {
            return null;
        }
        else {

            this.state.notesDisplay.map((note, index) => {
                console.log(note);
                
                if (note.pin === true) {
                    return count++;
                }
                return count;
            });
        }

        let pinnedNotes = (this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.pin === true) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate}
                    notesView={this.props.notesView} sideBarSelected={this.props.sideBarSelected}
                     getNoteDeleted={this.getNoteDeleted} getUpdateImage={this.getUpdateImage} />
            }
            return null;
        }));

        let unPinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.pin === false) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate}
                    notesView={this.props.notesView} sideBarSelected={this.props.sideBarSelected}
                     getNoteDeleted={this.getNoteDeleted} getUpdateImage={this.getUpdateImage} />
            }
            return null;
        });

        let reminderNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.reminder !== "") {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate}
                    notesView={this.props.notesView} sideBarSelected={this.props.sideBarSelected} getNoteDeleted={this.getNoteDeleted} />
            }
            return null;
        });

        let archiveNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === true && note.pin === false) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate}
                    notesView={this.props.notesView} sideBarSelected={this.props.sideBarSelected} getNoteDeleted={this.getNoteDeleted} />
            }
            return null;
        });

        let trashNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === true) {
                return <NoteCardDisplay key={index} noteSelected={note} getUpdate={this.getUpdate}
                    notesView={this.props.notesView} sideBarSelected={this.props.sideBarSelected} getNoteDeleted={this.getNoteDeleted} />
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
                                        {count > 0 ? (
                                            <div>
                                                <div >Pinned</div>
                                                <div className={this.props.notesView ? "notesGridDisplayDiv" : "notesListDisplayDiv"} >
                                                    {pinnedNotes}
                                                </div>
                                                <div>Others</div>
                                            </div>
                                        ) : (
                                                <div>
                                                </div>
                                            )}

                                        <div className={this.props.notesView ? "notesGridDisplayDiv" : "notesListDisplayDiv"} >
                                            {unPinnedNotes}
                                        </div>
                                    </div>
                                );
                            case 'Reminders':
                                return (
                                    <div className={this.props.notesView ? "notesGridDisplayDiv" : "notesListDisplayDiv"} >
                                        {reminderNotes}
                                    </div>
                                );
                            case 'Archive':
                                return (
                                    <div className={this.props.notesView ? "notesGridDisplayDiv" : "notesListDisplayDiv"} >
                                        {archiveNotes}
                                    </div>
                                );
                            case 'Trash':
                                return (
                                    <div className={this.props.notesView ? "notesGridDisplayDiv" : "notesListDisplayDiv"} >
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