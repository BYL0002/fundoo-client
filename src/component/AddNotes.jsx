import React from 'react';
import { Input, Card, CardContent, InputBase, Button } from '@material-ui/core';

class NoteDetails extends React.Component {
    render() {
        return (
            <div>
                <Card className="noteDetailsCard">
                    <CardContent>
                        <Input placeholder="Title" />
                    </CardContent>
                </Card>
            </div>
        )
    }
}

/**
 * @description AddNotes class component
 */
class AddNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleAddCard: false,
        }
    }

    handleAddNoteCardStatus(event) {
        this.setState({
            isToggleAddCard: !this.state.isToggleAddCard
        })
    }
    render() {
        return (
            <div>
                <Card className="noteTakeCard" >
                    {this.state.isToggleAddCard ? (
                        <div className = "completeNoteTakeCard" >
                            <div>
                                <InputBase className = "inputNoteTake" placeholder="Title" />
                            </div>
                            <div>
                                <InputBase className = "inputNoteTake" placeholder='Take a note' />
                            </div>
                            <div>
                                <img className = "noteAddFeatureImages" src = {require('../assets/images/reminder.svg')} alt = "reminder" />
                                <img className = "noteAddFeatureImages" src = {require('../assets/images/personAdd.svg')} alt = "addPerson" />
                                <img className = "noteAddFeatureImages" src = {require('../assets/images/color.svg')} alt = "color" />
                                <img className = "noteAddFeatureImages" src = {require('../assets/images/imageAdd.svg')} alt = "uploadImage" />
                                <img className = "noteAddFeatureImages" src = {require('../assets/images/archiveImage.svg')} alt = "archive" />
                                <img className = "noteAddFeatureImages" src = {require('../assets/images/undo.svg')} alt = "undo" />
                                <img className = "noteAddFeatureImages" src = {require('../assets/images/redo.svg')} alt = "redo" />
                                <Button className = "closeNoteAddCardButton" onClick = {this.handleAddNoteCardStatus.bind(this)} >Close</Button>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <InputBase className="inputNoteTake" placeholder="Take a note .." onClick={this.handleAddNoteCardStatus.bind(this)} />
                            </div>
                        )
                    }
                </Card>
            </div>
        )
    }
}

/**
 * @exports AddNotes class component
 */
export default AddNotes;