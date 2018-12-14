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
            layoutDefault: "list",
            messageDisplay: []
        }
    }

    handleCardSelected = (value) => {
        console.log('key of card : - ',value);

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
                <ReminderPopper />
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
                        {this.state.messageDisplay.map((option) => (
                            <div >
                                <Card className="notesGridDisplayCard" key = {option.title} onClick = {()=>this.handleCardSelected(option.title)} >
                                    {option.title}
                                   
                                    {AllFeatureComponent}
                                </Card>
                            </div>
                        ))}
                    </div>
                ) : (
                        <div className="notesListDisplayDiv" >
                            {this.state.messageDisplay.map((option, index) => (
                                <Card className="notesListDisplayCard" >{option.title}</Card>
                            ))}
                        </div>
                    )}

            </div>
        )
    }
}