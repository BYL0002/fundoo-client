/**
 * @description Component to display Notes
 * @author Yash
 * @since 8/12/18
 * @version 1.1
 */
import React from 'react';
import { Card } from '@material-ui/core';
import NoteService from '../service/NoteService';
import ReminderPopper from './ReminderPopper';
import ColorSection from './ColorSection';
import ArchiveNote from './ArchiveNote';
import MoreOptions from './MoreOptions';

let Notes;
let notesLayout;
export default class NotesDisplay extends React.Component {
    constructor(props) {
        super(props);
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
            snackbarMessage: "Note Archived!",





            dialogStatus: false,
            reminderChoosen: "",
            layoutDefault: "",
            messageDisplay: []
        }
    }

    handleNoteEditingDialog = () => {
        this.setState({
            dialogStatus: !this.state.dialogStatus
        });
    }

    handleCardSelected = (noteSelected) => {

    }


    getReminder = (reminderSet) => {
        this.setState({
            reminderChoosen: reminderSet
        });
    }

    componentDidMount() {
        let request = {
            thread: "/noteDisplay"
        }

        var self = this;

        NoteService.NoteDisplay(request, (err, data) => {

            if (data !== null && data !== undefined) {
                self.setState({
                    messageDisplay: data
                })
            }
            else {
                self.setState({
                    message_display: []
                })
            }
        });

        // setInterval(1000);
    }

    render() {
        let NotesDisplayDivClass;
        if (this.props.sidebarStatus) {
            NotesDisplayDivClass = "NotesDisplayDivSidebarOpen";
        }
        else {
            NotesDisplayDivClass = "NotesDisplayDivSidebarClose";
        }

        if(this.props.notesView)
        {
            notesLayout = "grid";
        }
        else
        {
            notesLayout = "list";
        }

        let AllFeatureComponent = (
            <div>
                <ReminderPopper getReminderChooseOption={this.getReminder} />
                <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson" />
                <ColorSection />
                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" />
                <ArchiveNote />
                <MoreOptions />
            </div>
        );

            // console.log('props to show cards display-----', this.props.notesView);
            

        return (
            <div className={NotesDisplayDivClass} >
                {notesLayout === "grid" ? (
                    <div className="notesGridDisplayDiv" >
                        {this.state.messageDisplay.map((option, index) => (
                            <Card key={index} className="notesGridDisplayCard" onClick={() => this.handleCardSelected(option)} >
                                
                                <div style={{ backgroundColor: option.color }} >
                                    <div>
                                        {option.title}
                                    </div>
                                    <div>
                                        {option.reminder}
                                    </div>
                                    <div>
                                        {AllFeatureComponent}
                                    </div>
                                </div>


                            </Card>
                        ))}
                    </div>
                ) : (
                        <div className="notesListDisplayDiv" >
                            {this.state.messageDisplay.map((option, index) => (
                                <Card className="notesListDisplayCard" >

                                    <div style={{ backgroundColor: option.color }} >
                                        <div>
                                            {option.title}
                                        </div>
                                        <div>
                                            {option.reminder}
                                        </div>
                                        <div>
                                            {AllFeatureComponent}
                                        </div>
                                    </div>
                                    
                                </Card>
                            ))}
                        </div>
                    )}

            </div>
        )
    }
}