/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';
import { Dialog, DialogContent, Input, DialogActions, createMuiTheme, MuiThemeProvider, DialogTitle } from '@material-ui/core';

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
            labels: [],
            labelDialogStatus: false,
            open:false,
            closeSign:false,

        }
    }

    handleOpen=()=>{
        this.setState({
            open:!this.state.open
        });
    }

    getLabelEdit = (event) => {
        
        this.props.getLabelEdit(event.target.value, this.props.noteSelected)
    }

    clearLabelText = (event) => {

    }

    labelDialogStatusFalse = () => {
        this.setState({
            labelDialogStatus: false
        })
    }

    ClosePlusSignChange = () => {
        this.setState({
            closeSign: !this.state.closeSign
        })
    }

    render() {        
        
        return (
            <div >
                <MuiThemeProvider theme={theme}>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleOpen}
                        aria-labelledby="responsive-dialog-title"
                    >
                        {/* debugger;    */}
                        <DialogTitle className="dialogLabel" >Edit Labels</DialogTitle>

                        <DialogContent className="dialogLabel" >

                            <div style={{ display: 'flex' }} >
                            {this.state.closeSign ? (
                                <img src={require("../assets/images/PlusSign.svg")} alt="addLabel"
                                className="dialogLabel" onClick={this.ClosePlusSignChange} />
                            ) : (
                                <img src={require("../assets/images/addLabel.svg")} alt="editLabel"
                                 className="dialogLabel" onClick={this.ClosePlusSignChange} />
                            )}
                                
                                <Input disableUnderline placeholder="Create new label" onChange={this.getLabelEdit} />
                                <img src={require("../assets/images/rightTick.svg")} alt="AddLabel" className="dialogLabel" />
                            </div>

                            {/* {this.state.labels.map(label, index) => {
                                <div>

                                </div>
                            }} */}
                        </DialogContent>

                        <DialogActions >
                        </DialogActions>
                    </Dialog>
                </MuiThemeProvider>

                <div onClick={this.handleOpen} >
                    <img src={require('../assets/images/SideBarLabelImage.svg')} alt="label" /> <span>Edit Labels</span>
                </div>

            </div>
        )
    }
}