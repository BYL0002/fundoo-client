/**
 * @description Component to display Notes
 * @author Yash
 * @since 8/12/18
 * @version 1.12
 */

import React from 'react';
import { Card, Chip } from '@material-ui/core';
import ReminderPopper from './ReminderPopper';
import Collaborator from './Collaborator';
import ColorSection from './ColorSection';
import ArchiveNote from './ArchiveNote';
import UploadImage from './UploadImage';
import MoreOptions from './MoreOptions';
import PinNote from './PinNote';
import DialogNoteEditComponent from './DialogNoteEditComponent';
import FormData from 'form-data';
const Formdata = new FormData();



export default class NoteCardDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.noteSelected,
            dialogDisplayStatus: false
        }
    }

    getBackGroundColor = (colorSelected, note) => {

        let request = {
            thread: "/updateNoteColor",
            data: {
                note: {
                    _id: note._id,
                    color: colorSelected
                }
            }
        }

        let noteTemp = this.state.note;
        noteTemp.color = colorSelected;
        this.setState({
            note: noteTemp
        })

        this.props.getUpdate(request, this.state.note);
    }

    getReminder = (reminderSet, note) => {
        let request = {
            thread: "/updateNoteReminder",
            data: {
                note: {
                    _id: note._id,
                    reminder: reminderSet
                }
            }
        }

        let noteTemp = this.state.note;
        noteTemp.reminder = reminderSet;
        this.setState({
            note: noteTemp
        })

        this.props.getUpdate(request, this.state.note);
    }

    getReminderRemoved = (note) => {

        let request = {
            thread: "/updateNoteReminder",
            data: {
                note: {
                    _id: note._id,
                    reminder: ""
                }
            }
        }

        let noteTemp = this.state.note;
        noteTemp.reminder = "";
        this.setState({
            note: noteTemp
        })

        this.props.getUpdate(request, this.state.note);
    }

    getPin = (pinSet, note) => {
        let request = {
            thread: "/updateNotePin",
            data: {
                note: {
                    _id: note._id,
                    pin: pinSet
                }
            }
        }

        let noteTemp = this.state.note;
        noteTemp.pin = pinSet;
        this.setState({
            note: noteTemp
        })

        this.props.getUpdate(request, this.state.note);

    }

    getImage = (imageSet, note) => {

        console.log('image upload----', imageSet);

        Formdata.append("image", imageSet);
        Formdata.append("_id", note._id);

        let request = {
            url: "/updateNoteImage",
            data: Formdata
        }

        this.props.getUpdateImage(request, note, this.props.index);

    }

    addNewImage = (note) => {
        console.log('note', note);

        let noteTemp = note;
        console.log("image upload as string------tempnote", noteTemp.image);

        this.setState({
            note: noteTemp
        })

    }


    getTrash = (trashSet, note) => {

        let request = {
            thread: "/updateNoteTrash",
            data: {
                note: {
                    _id: note._id,
                    trash: trashSet
                }
            }
        }

        let noteTemp = this.state.note;
        noteTemp.trash = trashSet;
        this.setState({
            note: noteTemp
        })

        this.props.getUpdate(request, this.state.note);

    }

    getArchive = (archiveSet, note) => {

        if (archiveSet === true) {
            note.pin = false;
        }
        else {
            note.pin = this.state.note.pin;
        }

        let request = {
            thread: "/updateNoteReminder",
            data: {
                note: {
                    _id: note._id,
                    archive: archiveSet,
                    pin: note.pin
                }
            }
        }

        let noteTemp = this.state.note;
        noteTemp.archive = archiveSet;
        this.setState({
            note: noteTemp
        })

        this.props.getUpdate(request, this.state.note);

    }

    getTitleEdit = (event, note) => {

        let request = {
            thread: "/updateNoteTitleDescription",
            data: {
                note: {
                    _id: note._id,
                    title: event.target.value
                }
            }
        }

        let noteTemp = this.state.note;
        noteTemp.title = event.target.value;

        this.setState({
            note: noteTemp
        })

        this.props.getUpdate(request, this.state.note);
    }

    getDescriptionEdit = (event, note) => {

        let request = {
            thread: "/updateNoteTitleDescription",
            data: {
                note: {
                    _id: note._id,
                    description: event.target.value
                }
            }
        }

        let noteTemp = this.state.note;
        noteTemp.description = event.target.value;

        this.setState({
            note: noteTemp
        })

        this.props.getUpdate(request, this.state.note);
    }

    getNoteDeleted = (note) => {

        let request = {
            thread: "/deleteNote",
            data: {
                note: {
                    _id: note._id
                }
            }
        }

        this.props.getNoteDeleted(request, this.state.note);
    }

    getNoteEdited = () => {

        this.setState({
            dialogDisplayStatus: !this.state.dialogDisplayStatus
        });
    }

    render() {

        return (

            <div >

                <Card className={this.props.notesView ? "notesGridDisplayCard" : "notesListDisplayCard"} >

                    <div style={{ backgroundColor: this.state.note.color, width: "-webkit-fill-available" }} >
                        {this.state.note.image !== "" ? (

                            <img src={this.props.noteSelected.image}
                                style={this.props.notesView ? { maxWidth: "100%", height: "auto" } : { maxWidth: "-webkit-fill-available", height: "auto" }}
                                alt='gff'></img>

                        ) : (
                                <div>
                                </div>
                            )}
                        <div className="noteCardDisplayTitleDiv" >
                            <div className="noteCardDisplayTitle" onClick={this.getNoteEdited} > {this.state.note.title}</div>
                            <PinNote noteSelected={this.state.note} getPin={this.getPin} getNotePin={this.state.note.pin} />

                        </div>
                        <div className="noteCardDisplayDescription" onClick={this.getNoteEdited} >
                            {this.state.note.description}
                        </div>

                        {this.state.note.reminder === "" ? (
                            <div>
                            </div>
                        ) : (
                                <div >
                                    <Chip
                                        icon={<img className="reminderClock" src={require('../assets/images/clocktime.svg')} alt="reminderClock" />}
                                        label={<span className="reminderShowOnCardText" >  {this.state.note.reminder} </span>}
                                        onDelete={() => this.getReminderRemoved(this.state.note)}
                                        variant="outlined"
                                        className="chipOnCardReminder"
                                    />
                                </div>
                            )}

                        <div>
                            {this.props.sideBarSelected === "Trash" ? (
                                <div>
                                    <MoreOptions noteSelected={this.state.note} getTrash={this.getTrash}
                                        getNoteDeleted={this.getNoteDeleted} sideBarSelected={this.props.sideBarSelected} />
                                </div>
                            ) : (
                                    <div className='noteAddFeatureImagesDiv' >
                                        <ReminderPopper getReminderChooseOption={this.getReminder}
                                            noteSelected={this.state.note} />

                                        <Collaborator />

                                        <ColorSection getColor={this.getBackGroundColor}
                                            noteSelected={this.state.note} />

                                        <UploadImage getImage={this.getImage}
                                            noteSelected={this.state.note} />

                                        <ArchiveNote noteSelected={this.state.note}
                                            getArchive={this.getArchive}
                                            getNoteArchive={this.state.note.archive} />

                                        <MoreOptions noteSelected={this.state.note}
                                            getTrash={this.getTrash}
                                            getNoteDeleted={this.getNoteDeleted}
                                            sideBarSelected={this.props.sideBarSelected} />
                                    </div>
                                )}

                        </div>
                    </div>
                    <DialogNoteEditComponent
                        noteSelected={this.state.note}
                        displayStatus={this.state.dialogDisplayStatus}
                        getNoteEdited={this.getNoteEdited}
                        getBackGroundColor={this.getBackGroundColor}
                        getReminder={this.getReminder}
                        getReminderRemoved={this.getReminderRemoved}
                        getPin={this.getPin}
                        getTrash={this.getTrash}
                        getArchive={this.getArchive}
                        getTitleEdit={this.getTitleEdit}
                        getDescriptionEdit={this.getDescriptionEdit}
                    />
                </Card>
            </div>
        )
    }
}