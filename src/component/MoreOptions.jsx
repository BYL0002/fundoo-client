import React from 'react';
import { MenuItem } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core';
import { Popper, Paper } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import LabelNoteAdditionDialog from '../component/LabelNoteAdditionDialog';


export default class MoreOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
        }
    }

    handlePopperOptionOnOutsideClick = () => {
        this.setState({
            open: false
        })
    }

    handleShowMoreOptionPopper = placement => event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    }

    getNoteDelete = () => {
        this.props.getTrash(!this.props.noteSelected.trash, this.props.noteSelected);
    }

    getNoteDeletedCompletely = () => {
        this.props.getNoteDeleted(this.props.noteSelected);
    }

    getNoteAddLabel = (labelClicked) => {
        this.setState({
            open: false
        })
        this.props.getNoteLabel(labelClicked, this.props.noteSelected);
    }

    render() {

        return (
            <div>

                {/* <ClickAwayListener onClickAway={this.handlePopperOptionOnOutsideClick}> */}
                <img onClick={this.handleShowMoreOptionPopper('bottom')} className="noteAddFeatureImages"
                    src={require('../assets/images/moreOptions.svg')} alt="moreOptions" />
                {/* </ClickAwayListener> */}

                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="colorSelectionPopperNoteAddCard"  >
                                <div >
                                    {this.props.sideBarSelected === "Trash" ? (
                                        <div>
                                            <MenuItem onClick={this.getNoteDelete} >Restore</MenuItem>
                                            <MenuItem onClick={this.getNoteDeletedCompletely} >Delete</MenuItem>
                                        </div>

                                    ) : (
                                            <div>
                                                <MenuItem onClick={this.getNoteDelete} >Delete</MenuItem>

                                                <LabelNoteAdditionDialog
                                                    allLabels={this.props.allLabels}
                                                    openStatus={this.state.open}
                                                    getNoteAddLabel={this.getNoteAddLabel} />

                                                {/* <MenuItem onClick={this.getNoteAddLabel} >Add Label</MenuItem> */}
                                            </div>

                                        )}


                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div>
        )
    }
}