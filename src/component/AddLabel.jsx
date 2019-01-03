/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';
import { Dialog, DialogContent, Input, DialogActions, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

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

/**
 * @description Class Component
 * @exports Class to render
 */
export default class AddLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            labels: []
        }
    }

    render() {

        return (
            <div >
                <MuiThemeProvider theme={theme}>
                    <Dialog
                        open={this.props.labelDialogStatus}
                        onClose={this.props.labelDialogStatusOnClick}
                        aria-labelledby="responsive-dialog-title"
                    >
                        {/* debugger;    */}
                        <DialogContent id="dialogNoteEdit" >

                            <div style={{ display: 'flex' }} >

                                <Input className="inputNoteTake"
                                    onChange={(event) => this.props.getLabelEdit(event, this.props.noteSelected)} />

                            </div>

                        </DialogContent>

                        <DialogActions >
                        </DialogActions>
                    </Dialog>
                </MuiThemeProvider>

                <div onClick={this.labelDialogStatusOnClick}>
                    <img src={require('../assets/images/SideBarLabelImage.svg')} alt="label" /> <span>Edit Labels</span>
                </div>

            </div>
        )
    }
}