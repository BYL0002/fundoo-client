import React from 'react';
import { MenuItem } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core';
import { Popper, Paper } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

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
            open : false
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

    render() {

        return (
            <span>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="colorSelectionPopperNoteAddCard"  >
                                <div >
                                    <MenuItem onClick={this.getNoteDelete} >Delete</MenuItem>
                                    <MenuItem onClick={this.getNoteEitherDeleteOrArchive} >Add Label</MenuItem>
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <ClickAwayListener onClickAway={this.handlePopperOptionOnOutsideClick}>
                    <img onClick={this.handleShowMoreOptionPopper('bottom')} className="noteAddFeatureImages"
                     src={require('../assets/images/moreOptions.svg')} alt="moreOptions" />
                </ClickAwayListener>
            </span>
        )
    }
}