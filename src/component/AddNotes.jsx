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

/**
 * @description AddNotes class component
 */
class AddNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleAddCard: false,
            isAddNoteCardStatus : true
        }
        this.handleAddNoteCardDisplay = this.handleAddNoteCardDisplay.bind(this);
        this.handleAddNoteCardToggleStatus = this.handleAddNoteCardToggleStatus.bind(this);
    }

    handleAddNoteCardToggleStatus(event) {
        this.setState({
            isToggleAddCard: !this.state.isToggleAddCard
        })
    }

    handleAddNoteCardDisplay(event) {
        this.setState({
            isAddNoteCardStatus : !this.state.isAddNoteCardStatus
        })
    }

    render() {
        return (
            <div>
                {this.state.isAddNoteCardStatus ? (
                    <Card className="noteTakeCard" >
                    {this.state.isToggleAddCard ? (
                        <div className="completeNoteTakeCard" >
                            <div>
                                <InputBase className="inputNoteTake" placeholder="Title" />
                            </div>
                            <div>
                                <InputBase className="inputNoteTake" placeholder='Take a note' />
                            </div>
                            <div>
                                <ReminderPopper />
                                <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson" onClick = {this.handleAddNoteCardDisplay} />
                                <ColorSection />
                                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" />
                                <img className="noteAddFeatureImages" src={require('../assets/images/archiveImage.svg')} alt="archive" />
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
                </Card>
                ): (
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
            <NotesDisplay />
            </div>
        )
    }
}

/**
 * @exports AddNotes class component
 */
export default AddNotes;