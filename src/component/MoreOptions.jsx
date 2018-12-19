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

    handlePopperOption = () => {
        this.setState({
            open : !this.state.open
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

    render() {

        return (
            <span>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className="colorSelectionPopperNoteAddCard"  >
                                <div >
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Add Label</MenuItem>
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <ClickAwayListener onClickAway={this.handlePopperOption}>
                    <img onClick={this.handleShowMoreOptionPopper('bottom')} className="noteAddFeatureImages"
                     src={require('../assets/images/moreOptions.svg')} alt="moreOptions" />
                </ClickAwayListener>
            </span>
        )
    }
}