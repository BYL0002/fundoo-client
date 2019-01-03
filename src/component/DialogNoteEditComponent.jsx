/**
 * @description AddNotes Card component
 * @author Yash
 * @since 7/12/18
 * @version 1.2
 */

import React from 'react';
import { Dialog, DialogContent, Input, Button, DialogActions, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import ReminderPopper from './ReminderPopper';
import Collaborator from './Collaborator';
import ColorSection from './ColorSection';
import UploadImage from './UploadImage';
import ArchiveNote from './ArchiveNote';
import PinNote from './PinNote';
import { Chip } from '@material-ui/core';

// import { ClickAwayListener } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiDialog: {
            paperWidthSm: {
                borderRadius: 8
            }
        },
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(255, 255, 255,0.7)'
            }
        }
    }
})
//.MuiBackdrop-root-254

/**
 * @description DialogNoteEditComponent class component
 */
class DialogNoteEditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.displayStatus,
            noteSelected: this.props.noteSelected
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

    render() {

        return (
            <div >
                <MuiThemeProvider theme={theme}>
                    <Dialog
                        // fullScreen={fullScreen}
                        open={this.props.displayStatus}
                        onClose={this.props.getNoteEdited}
                        aria-labelledby="responsive-dialog-title"
                    // id="dialogBox"
                    >
                        <div style={{ backgroundColor: this.props.noteSelected.color }} >
                            <DialogContent id="dialogNoteEdit" >

                                <div style={{ display: 'flex' }} >
                                    <Input className="inputNoteTake" value={this.props.noteSelected.title}
                                        disableUnderline
                                        onChange={(event) => this.props.getTitleEdit(event, this.props.noteSelected)} />


                                    <PinNote noteSelected={this.props.noteSelected}
                                        getPin={this.props.getPin} getNotePin={this.props.noteSelected.pin} />

                                </div>

                                <Input className="inputNoteTake" value={this.props.noteSelected.description}
                                    disableUnderline
                                    onChange={(event) => this.props.getDescriptionEdit(event, this.props.noteSelected)} />

                                {this.props.noteSelected.reminder === "" ? (
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
                                    )}

                            </DialogContent>

                            <DialogActions >
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <div className='notenoteAddFeatureImagesDiv' >
                                        <ReminderPopper getReminderChooseOption={this.props.getReminder} noteSelected={this.props.noteSelected} />
                                        <Collaborator />
                                        <ColorSection getColor={this.props.getBackGroundColor} initialColorValue={this.colorSelect} />
                                        <UploadImage />
                                        <ArchiveNote getArchive={this.props.getArchive} getNoteArchive={false} noteSelected={'option'} />
                                    </div>

                                    <div><Button className="dialogCloseButton" color="primary" onClick={this.props.getNoteEdited} >Close</Button></div>
                                </div>
                            </DialogActions>
                        </div>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}

/**
 * @exports DialogNoteEditComponent class component
 */
export default DialogNoteEditComponent;