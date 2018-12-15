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

let Notes;

export default class NotesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reminderChoosen: "",
            layoutDefault: "list",
            messageDisplay: []
        }
    }

    handleCardSelected = (noteSelected) => {
        console.log('note selected ------------', noteSelected);
        noteSelected.reminder = this.state.reminderChoosen;
        console.log('note of reminder set card : ------- ',noteSelected);
        console.log('reminder set on note -------', noteSelected.reminder);
        
    }


    getReminder = (reminderSet) => {
        this.setState({
            reminderChoosen: reminderSet
        })
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
    }

    render() {
        let NotesDisplayDivClass;
        if (this.props.sidebarStatus) {
            NotesDisplayDivClass = "NotesDisplayDivSidebarOpen";
        }
        else {
            NotesDisplayDivClass = "NotesDisplayDivSidebarClose";
        }

        let AllFeatureComponent = (
            <div>
                <ReminderPopper getReminderChooseOption={this.getReminder} />
                <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson" />
                <ColorSection />
                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" />
                <ArchiveNote />
            </div>
        );

        return (
            <div className={NotesDisplayDivClass} >
                {this.props.notesView ? (
                    <div className="notesGridDisplayDiv" >
                        {this.state.messageDisplay.map((option,indexx) => (
                            <div >
                                <Card key={indexx} className="notesGridDisplayCard" onClick = {()=>this.handleCardSelected(option)} >
                                    <div>
                                        {option.title}
                                    </div>
                                    <div>
                                        {option.reminder}
                                        {/* {this.state.reminderChoosen} */}
                                    </div>
                                    <div>
                                        {AllFeatureComponent}
                                    </div>
                                    
                                   
                                    
                                </Card>
                            </div>
                        ))}
                    </div>
                ) : (
                        <div className="notesListDisplayDiv" >
                            {this.state.messageDisplay.map((option, index) => (
                                <Card className="notesListDisplayCard" >
                                {option.title}
                                {AllFeatureComponent}
                                </Card>
                            ))}
                        </div>
                    )}

            </div>
        )
    }
}