/**
 * @description AddNotes Card component
 * @author Yash
 * @since 7/12/18
 * @version 1.2
 */

import React from 'react';
import { Card, InputBase, Button, Snackbar, IconButton, Chip } from '@material-ui/core';
// import { ClickAwayListener } from '@material-ui/core'
import ReminderPopper from './ReminderPopper';
import Collaborator from './Collaborator';
import ColorSection from './ColorSection';
// import NotesDisplay from './NotesDisplay';
import ArchiveNote from './ArchiveNote';
import NoteService from '../service/NoteService';
import CloseIcon from '@material-ui/icons/Close';
import PinNote from './PinNote';
import UploadImage from './UploadImage';
import FormData from 'form-data';
const Formdata = new FormData();

/**
 * @description AddNotes class component
 */
class AddNotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleAddCard: false,
            isAddNoteCardStatus: true,
            collaboratorChoosen: "",
            colorSelect: "",
            reminderChoosen: "",
            noteTitle: "",
            noteDescription: "",
            imageAdded: "",
            archiveChoosen: false,
            pinChoosen: false,
            trashChoosen: false,
            snackbarStatus: false,
            snackbarMessage: "Note Archived!"
        }
        this.handleAddNoteCardDisplay = this.handleAddNoteCardDisplay.bind(this);
        this.handleAddNoteCardToggleStatus = this.handleAddNoteCardToggleStatus.bind(this);
        this.getBackGroundColor = this.getBackGroundColor.bind(this);
        // this.notedisp = React.createRef();
    }

    handleAddNoteCardDisplay() {
        this.setState({
            isAddNoteCardStatus: !this.state.isAddNoteCardStatus
        })
    }

    handleInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getBackGroundColor = (colorSelected, note) => {
        this.setState({
            colorSelect: colorSelected
        })
    }

    getImage = (imageSelected, note) => {

        console.log('image upload----', imageSelected);

        Formdata.append('image', imageSelected);
    }

    getReminder = (reminderSet, note) => {

        this.setState({
            reminderChoosen: reminderSet
        })
    }

    getReminderRemoved = () => {
        this.setState({
            reminderChoosen: ""
        })
    }

    getPin = (pinSet, note) => {

        this.setState({
            pinChoosen: pinSet
        })
    }

    getTrash = (trashSet, note) => {
        this.setState({
            trashChoosen: trashSet
        });
    }

    handleSnackClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ snackbarStatus: false });
    };

    getArchive = (archiveSet, note) => {

        if (archiveSet) {
            this.setState({ archiveChoosen: archiveSet, snackbarStatus: true }, this.handleAddNoteRequest);
        }
    }

    handleAddNoteCardToggleStatus() {
        this.setState({
            isToggleAddCard: !this.state.isToggleAddCard
        })
    }

    handleAddNoteRequest() {

        console.log('image state set', this.state.imageAdded);


        this.setState({
            isToggleAddCard: !this.state.isToggleAddCard,
            colorSelect: "rgb(255, 255, 255)",
            pinChoosen: false,
            archiveChoosen: false,
            trashChoosen: false,
            reminderChoosen: "",
            noteTitle: "",
            noteDescription: "",
            // imageAdded: "",
        });

        let userLogin = localStorage.getItem("userLogged");

        /**
         * without image upload - request
         */

        // let request = {
        //     thread: "/noteAddition",
        //     data: {
        //         sender: userLogin,
        //         userId: "",
        //         title: this.state.noteTitle,
        //         description: this.state.noteDescription,
        //         collaborator: this.state.collaboratorChoosen,
        //         reminder: this.state.reminderChoosen,
        //         color: this.state.colorSelect,
        //         image: this.state.imageAdded,
        //         archive: this.state.archiveChoosen,
        //         pin: this.state.pinChoosen,
        //         trash: false
        //     }
        // }


        /**
         * with image upload - request
         */

        let request = {
            thread: "/noteAddition",
            image : Formdata,
            data: {
                sender: userLogin,
                userId: "",
                title: this.state.noteTitle,
                description: this.state.noteDescription,
                collaborator: this.state.collaboratorChoosen,
                reminder: this.state.reminderChoosen,
                color: this.state.colorSelect,
                image: "",
                archive: this.state.archiveChoosen,
                pin: this.state.pinChoosen,
                trash: false
            }
        }

        NoteService.NotesAddition(request, (err, data) => {

            if (data !== null || data !== undefined) {
                this.props.newNoteCreated(data);
                // this.notedisp.current.addNewNote(data);
            }
        });
    }

    render() {
        return (
            <div >

                {this.state.isAddNoteCardStatus ? (
                    // <ClickAwayListener onClickAway={this.handleAddNoteCardToggleStatus}>
                    <Card className={this.props.drawerStatus ? "noteTakeCardAfterDrawerOpen" : "noteTakeCard"} >
                        <div style={{ backgroundColor: this.state.colorSelect }} >
                            {this.state.isToggleAddCard ? (
                                <div className="completeNoteTakeCard" >
                                    <div style={{ display: 'flex' }} >
                                        <InputBase className="inputNoteTake" placeholder="Title" multiline name="noteTitle" onChange={this.handleInputValue} />
                                        <PinNote noteSelected={'option'} getPin={this.getPin} getNotePin={false} />
                                    </div>
                                    <div>
                                        <InputBase className="inputNoteTake" placeholder='Take a note' multiline name="noteDescription" onChange={this.handleInputValue} />
                                    </div>
                                    {this.state.reminderChoosen === "" ? (
                                        <div>
                                        </div>
                                    ) : (
                                            <div>
                                                <Chip
                                                    icon={<img className="reminderClock" src={require('../assets/images/clocktime.svg')} alt="reminderClock" />}
                                                    label={<span className="reminderShowOnCardText" >  {this.state.reminderChoosen} </span>}
                                                    onDelete={this.getReminderRemoved}
                                                    variant="outlined"
                                                    className="chipOnCardReminder"
                                                />
                                            </div>
                                        )}
                                    <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}} >
                                
                                        <div className="notenoteAddFeatureImagesDiv" >
                                            <ReminderPopper getReminderChooseOption={this.getReminder} />
                                            <Collaborator collaboratorCardStatus={this.handleAddNoteCardDisplay} />
                                            <ColorSection getColor={this.getBackGroundColor} initialColorValue={this.colorSelect} />
                                            <UploadImage getImage={this.getImage} />
                                            <ArchiveNote getArchive={this.getArchive} getNoteArchive={false} noteSelected={'option'} />
                                            

                                        </div>
                                        <div>
                                            <Button onClick={this.handleAddNoteRequest.bind(this)} >Close</Button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    <div>
                                        <InputBase className="inputNoteTake" placeholder="Take a note .." onClick={this.handleAddNoteCardToggleStatus} />
                                    </div>
                                )
                            }
                        </div>
                    </Card>
                    // </ClickAwayListener>
                ) : (
                        <div>
                            <Card className="noteTakeCard" >
                                <div className="completeNoteTakeCard" >
                                    <div className="CollaboratorHeading" >
                                        <span  >Collaborators</span>
                                    </div>
                                    <div>
                                        <Button className="closeNoteAddCardButton" onClick={this.handleAddNoteCardDisplay} >Close</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )
                }
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.snackbarStatus}
                    autoHideDuration={6000}
                    onClose={this.handleSnackClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    color="primary"
                    variant="success"
                    message={<span id="message-id">{this.state.snackbarMessage}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleSnackClose} >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                {/* <NotesDisplay ref={this.notedisp} sideBarSelected={this.props.sideBarSelected}
                    getSidebarTabSelected={this.props.getSidebarTabSelected} notesView={this.props.notesView}
                    sidebarStatus={this.props.drawerStatus} getNewNote={this.state.newNote} /> */}
            </div>
        )
    }
}

/**
 * @exports AddNotes class component
 */
export default AddNotes;