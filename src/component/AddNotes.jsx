/**
 * @description AddNotes Card component
 * @author Yash
 * @since 7/12/18
 * @version 1.2
 */
import React from 'react';
import { Card, InputBase, Button } from '@material-ui/core';
import ReminderPopper from './ReminderPopper';
import ColorSection from './ColorSection';
import NotesDisplay from './NotesDisplay';
import PinNote from './PinNote';
import ArchiveNote from './ArchiveNote';
import NoteService from '../service/NoteService';

/**
 * @description AddNotes class component
 */
class AddNotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleAddCard : false,
            isAddNoteCardStatus : true,
            collaboratorChoosen : "",
            colorSelect : "",
            reminderChoosen : "",
            noteTitle : "",
            noteDescription : "",
            imageAdded : "",
            archiveChoosen : false,
            pinChoosen : false,
            trashChoosen : false
        }
        this.handleAddNoteCardDisplay = this.handleAddNoteCardDisplay.bind(this);
        this.handleAddNoteCardToggleStatus = this.handleAddNoteCardToggleStatus.bind(this);
        this.getBackGroundColor = this.getBackGroundColor.bind(this);
    }

    handleAddNoteCardDisplay() {
        this.setState({
            isAddNoteCardStatus: !this.state.isAddNoteCardStatus
        })
    }

    handleInputValue = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    getInputValue = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    getBackGroundColor(colorSelected) {
        this.setState({
            colorSelect: colorSelected
        }) 
    }

    getReminder = (reminderSet) => {
        this.setState({
            reminderChoosen : reminderSet
        })
    }

    getPin = (pinSet) => {
        this.setState({
            pinChoosen : pinSet
        })        
    }
    
    getArchive = (archiveSet) => {
        console.log(archiveSet);
        console.log('before ', this.state.archiveChoosen);
        
        this.setState({
            archiveChoosen : archiveSet
        })

        console.log('after ', this.state.archiveChoosen);
        if(!this.state.archiveChoosen)
        {
            console.log('archive in if ', this.state.archiveChoosen);
            
            this.handleAddNoteCardToggleStatus();
        }
    }
    
    getTrash = (trashSet) => {
        this.setState({
            trashChoosen : trashSet
        })
    }

    handleAddNoteCardToggleStatus() {
        this.setState({
            isToggleAddCard: !this.state.isToggleAddCard,
            colorSelect : "rgb(255, 255, 255)",
            pinChoosen : false,
            archiveChoosen : false,
            trashChoosen : false,
            reminderChoosen : ""
        });
        
        let request = {
            title : this.state.noteTitle,
            description : this.state.noteDescription,
            collaborator : this.state.collaboratorChoosen,
            reminder : this.state.reminderChoosen,
            color : this.state.colorSelect,
            imageAdded : this.state.imageAdded,
            archive : this.state.archiveChoosen,
            pin : this.state.pinChoosen,
            trash : false
        }
        console.log('reques on component', request);
        
        NoteService.NotesAddition(request);
    }

    render() {
        let classCard;
        if (this.props.drawerStatus)
            classCard = "noteTakeCardAfterDrawerOpen";
        else
            classCard = "noteTakeCard";

        return (
            <div >
                {this.state.isAddNoteCardStatus ? (
                    <Card className={classCard} >
                    <div style = {{backgroundColor : this.state.colorSelect}} >
                        {this.state.isToggleAddCard ? (
                            <div className="completeNoteTakeCard" >
                                <div>
                                    <InputBase className="inputNoteTake" placeholder="Title" multiline name = "noteTitle" onChange = {this.handleInputValue} />
                                    <PinNote getPin = {this.getPin} />
                                </div>
                                <div>
                                    <InputBase className="inputNoteTake" placeholder='Take a note' multiline name = "noteDescription" onChange = {this.handleInputValue} />
                                </div>
                                {this.state.reminderChoosen === "" ? (
                                    <div>
                                    </div>
                                ) : (
                                    <div>
                                        <span> 
                                            <img className = "reminderClock" src = {require('../assets/images/clocktime.svg')} alt = "reminderClock" />
                                            {this.state.reminderChoosen}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <ReminderPopper getReminderChooseOption = {this.getReminder} />
                                    <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson" onClick={this.handleAddNoteCardDisplay} />
                                    <ColorSection getColor = {this.getBackGroundColor} />
                                    <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" />
                                    <ArchiveNote getArchive = {this.getArchive} />
                                    <img className="noteAddFeatureImages" src={require('../assets/images/undo.svg')} alt="undo" />
                                    <img className="noteAddFeatureImages" src={require('../assets/images/redo.svg')} alt="redo" />
                                    <Button className="closeNoteAddCardButton" onClick={this.handleAddNoteCardToggleStatus.bind(this)} >Close</Button>
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
                <NotesDisplay notesView = {this.props.notesView} sidebarStatus = {this.props.drawerStatus} />
            </div>
        )
    }
}

/**
 * @exports AddNotes class component
 */
export default AddNotes;