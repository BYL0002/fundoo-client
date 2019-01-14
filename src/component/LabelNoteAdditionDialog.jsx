/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';
import { Popper, Paper } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

/**
 * @description Class Component
 * @exports Class to render
 */
export default class LabelNoteAdditionDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            open: false,
            placement: null
        }
    }

    handleShowLabelPopper = placement => event => {

        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    }

    addLabeltoNote = () => {
        // console.log('label selected', val);
        
    }

    render() {
        // eslint-disable-next-line

        return (
            <div>
                <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={this.state.placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps}>
                            <Paper >

                                <div>

                                    {this.props.allLabels.map((option, index) => {

                                        return <div key={index} >

                                                <MenuItem>{option.labels}</MenuItem>

                                            </div>

                                    })}

                                </div>

                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <div onClick={this.handleShowLabelPopper("right")} >

                    <MenuItem onClick={this.getNoteAddLabel} >Add Label</MenuItem>

                </div>
            </div>
        )

    }
}