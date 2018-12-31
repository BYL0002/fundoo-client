/**
 * @description AddNotes Card component
 * @author Yash
 * @since 7/12/18
 * @version 1.2
 */

import React from 'react';
import { Dialog, DialogContent, Input, Button, DialogActions } from '@material-ui/core';
import ReminderPopper from './ReminderPopper';
import ColorSection from './ColorSection';
import UploadImage from './UploadImage';
import ArchiveNote from './ArchiveNote';
import PinNote from './PinNote';
// import { Chip } from 'material-ui';

// import { ClickAwayListener } from '@material-ui/core'

/**
 * @description DialogNoteEditComponent class component
 */
class DialogNoteEditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.displayStatus
        }
    }

    componentDidMount() {
        this.setState({
            open: this.props.displayStatus
        })
    }

    handleClose = () => {
        console.log('trig', this.state.open);

        this.setState({
            open: false
        })
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

    render() {

        return (
            <div >
                <Dialog
                    // fullScreen={fullScreen}
                    open={this.props.displayStatus}
                    onClose={this.props.getNoteEdited}
                    aria-labelledby="responsive-dialog-title"
                    // 
                    className="dialogNoteEdit"
                >
                    <div style={{ backgroundColor: this.props.noteSelected.color }}>
                        <DialogContent className="dialogNoteEdit" >

                            <div> <Input className="inputNoteEditDialog" value={this.props.noteSelected.title} disableUnderline /> </div>
                            <PinNote noteSelected={this.props.noteSelected} getPin={this.props.getPin} getNotePin={this.props.noteSelected.pin} />


                            <Input className="inputNoteEditDialog" value={this.props.noteSelected.description} disableUnderline />

                            {/* {this.props.noteSelected.reminder === "" ? (
                                <div>
                                </div>
                            ) : (
                                    <div >
                                        <Chip
                                            icon={<img className="reminderClock" src={require('../assets/images/clocktime.svg')} alt="reminderClock" />}
                                            label={<span className="reminderShowOnCardText" >  {this.props.noteSelected.reminder} </span>}
                                            onDelete={() => this.props.getReminderRemoved(this.props.noteSelected)}
                                            variant="outlined"
                                            className="chipOnCardReminder"
                                        />
                                    </div>
                                )} */}

                        </DialogContent>

                        <DialogActions className="dialogEditNoteFeature" >
                            <div className='notesFeatureDiv'>
                                <div className='icons' style={{ position: 'fixed' }} >
                                    <ReminderPopper getReminderChooseOption={this.props.getReminder} />
                                    <img className="noteAddFeatureImages" src={require('../assets/images/personAdd.svg')}
                                     alt="addPerson" onClick={this.handleAddNoteCardDisplay} />
                                    <ColorSection getColor={this.props.getBackGroundColor} initialColorValue={this.colorSelect} />
                                    <UploadImage />
                                    <ArchiveNote getArchive={this.props.getArchive} getNoteArchive={false} noteSelected={'option'} />

                                </div>
                                <div><Button color="primary" className="closeNoteAddCardButton" onClick={this.props.getNoteEdited} >Close</Button></div>
                            </div>
                        </DialogActions>
                    </div>
                </Dialog>
            </div>
        )
    }
}

/**
 * @exports DialogNoteEditComponent class component
 */
export default DialogNoteEditComponent;