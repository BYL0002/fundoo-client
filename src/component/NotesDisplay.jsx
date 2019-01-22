/**
 * @description Component to display Notes
 * @author Yash
 * @since 8/12/18
 * @version 1.12
 */

import React from 'react';
import NoteService from '../service/NoteService';
import NoteCardDisplay from './NoteCardDisplay';

// import CanvasJS from '../assets/canvas/canvasjs.react';
// import CanvasJSChart from '../assets/canvas/canvasjs.react';

import { CanvasJS, CanvasJSChart } from '../assets/canvas/canvasjs.react';

// const CanvasJSReact = require('../assets/canvas/canvasjs.react');
// const CanvasJS = CanvasJSReact.CanvasJS;
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
        this.noteImageUpdate = React.createRef();
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

            console.log("complete data of notes-----", data);


            if (data !== null && data !== undefined) {

                let tempArrayOfNotes = [];
                let collabNoteDetails = [];

                for (let i = 0; i < data.length; i++) {
                    // console.log("response.data.message[i].note---", response.data.message[i].note);

                    tempArrayOfNotes.push(data[i].note);
                    collabNoteDetails.push({
                        noteId: data[i].note._id,
                        collabId: data[i].collab
                    })
                }

                console.log("collab on notesDisplay component---", collabNoteDetails);


                self.setState({
                    notesDisplay: tempArrayOfNotes
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

    getUpdateImage = (request, note, index) => {

        NewNoteServiceClassObject.NotesUpdation(request, (err, data) => {
            if (err) {
                console.log("err", err);
            }
            else {

                let newNotesArray = this.state.notesDisplay;

                for (let i = 0; i < newNotesArray.length; i++) {
                    if (newNotesArray[i]._id === data._id) {
                        newNotesArray[i] = data
                    }
                }

                // let newNotesArray = this.state.notesDisplay;
                // newNotesArray[index] = data;

                this.setState({
                    notesDisplay: newNotesArray
                })

                // this.noteImageUpdate.current.addNewImage(data);
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

    getCollabAddition = (request, note) => {

        NoteService.NotesAddition(request, (err, data) => {
            console.log("data on collab saved---", data);

        })
    }

    render() {

        let numberOfPinnedNotes = 0, numberOfOtherNotes = 0, numberOfReminderNotes = 0;

        const noteComponentCALL = (index, note) => {
            return <NoteCardDisplay key={index}
                index={index}
                noteSelected={note}
                getUpdate={this.getUpdate}
                notesView={this.props.notesView}
                sideBarSelected={this.props.sideBarSelected}
                getNoteDeleted={this.getNoteDeleted}
                getUpdateImage={this.getUpdateImage}
                ref={this.noteImageUpdate}
                getCollabAddition={this.getCollabAddition}
                allLabels={this.props.allLabels} />
        }

        let count = 0;

        if (this.state.notesDisplay === null) {
            return null;
        }
        else {

            this.state.notesDisplay.map((note, index) => {
                if (note.pin === true) {
                    return count++;
                }

                return count;
            });
        }

        let pinnedNotes = (this.state.notesDisplay.map((note, index) => {

            if (note.trash === false && note.archive === false && note.pin === true) {

                numberOfPinnedNotes++;
                // console.log('numberOfPinnedNotes', numberOfPinnedNotes);

                return noteComponentCALL(index, note);
            }
            return null;
        }));




        let unPinnedNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.pin === false) {

                numberOfOtherNotes++;
                // console.log('numberOfOtherNotes', numberOfOtherNotes);

                return noteComponentCALL(index, note);
            }
            return null;
        });

        let reminderNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === false && note.reminder !== "") {

                numberOfReminderNotes++;
                // console.log('numberOfReminderNotes', numberOfReminderNotes);

                return noteComponentCALL(index, note);
            }
            return null;
        });

        let archiveNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === false && note.archive === true && note.pin === false) {
                return noteComponentCALL(index, note);
            }
            return null;
        });

        let trashNotes = this.state.notesDisplay.map((note, index) => {
            if (note.trash === true) {
                return noteComponentCALL(index, note);
            }
            return null;
        });

        let labelNotes = this.state.notesDisplay.map((note, index) => {
            for (let i = 0; i < note.labels.length; i++) {
                if (note.labels[i] === this.props.sideBarSelected) {
                    return noteComponentCALL(index, note);
                }
            }
            return null;
        });


        const ChartComponent = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2", //"light1", "dark1", "dark2"
            title: {
                text: "Simple Column Chart with Index Labels"
            },
            data: [{
                type: "column", //change type to bar, line, area, pie, etc
                //indexLabel: "{y}", //Shows y value on all Data Points
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                dataPoints: [
                    { x: 10, y: numberOfPinnedNotes, label:"Pin Notes" },
                    { x: 20, y: numberOfOtherNotes, label: "Other Notes" },
                    { x: 30, y: numberOfReminderNotes, label: "Reminder Notes" },
                    { x: 40, y: 65 },
                    { x: 50, y: 92, indexLabel: "Highest" },
                ]
            }]
        }
        
        const options = {
			title: {
				text: "Basic Column Chart"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Pin",  y: numberOfPinnedNotes  },
					{ label: "Other", y: numberOfOtherNotes  },
					{ label: "Reminder", y: numberOfReminderNotes  },
				]
			}
			]
		}

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
                                                <div className={this.props.notesView ? "textShowingPinnedAndOthersGRID" : "textShowingPinnedAndOthersLIST"} >Pinned</div>
                                                <div className={this.props.notesView ? "notesGridDisplayDiv" : "notesListDisplayDiv"} >
                                                    {pinnedNotes}
                                                </div>
                                                <div className={this.props.notesView ? "textShowingPinnedAndOthersGRID" : "textShowingPinnedAndOthersLIST"} >Others</div>
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
                                );
                            case 'NotesStat':
                                return (
                                    <div>
                                        <CanvasJSChart options={options} />
                                    </div>
                                )
                            default:
                                return (
                                    <div className={this.props.notesView ? "notesGridDisplayDiv" : "notesListDisplayDiv"} >
                                        {labelNotes}
                                    </div>
                                );
                        }
                    })()}
                </div>

            </div>
        )
    }
}        