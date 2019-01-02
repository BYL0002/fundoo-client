/**
 * @description Collaborator Card component
 * @author Yash
 * @since 7/12/18
 * @version 1.2
 */
import React from 'react';
import { Card, Button } from '@material-ui/core';


/**
 * @description AddNotes class component
 */
class Collaborator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleCollaboratorCard: false
        }
    }

    handleDisplayCollaboratorCardStatus(event) {
        
        this.setState({
            isToggleCollaboratorCard: !this.state.isToggleCollaboratorCard
        })

        this.props.collaboratorCardStatus(this.state.isToggleCollaboratorCard);
    }

    render() {
        return (
            <span>
                {this.state.isToggleCollaboratorCard ? (

                    <Card className="noteTakeCard" >
                        <div className="completeNoteTakeCard" >
                            <div>
                                <span className="CollaboratorHeading" >Collaborators</span>
                            </div>
                            <div>
                                <Button className="closeNoteAddCardButton" onClick={this.handleDisplayCollaboratorCardStatus.bind(this)} >Close</Button>
                            </div>
                        </div>
                    </Card>
                ) : (
                        <div>
                            <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')} alt="addPerson"
                                onClick={this.handleDisplayCollaboratorCardStatus.bind(this)} />
                        </div>
                    )
                }
            </span>
        )
    }
}

/**
 * @exports AddNotes class component
 */
export default Collaborator;