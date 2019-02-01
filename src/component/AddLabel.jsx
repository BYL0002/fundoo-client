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
            labels: this.props.labels,
            labelDialogStatus: false,
            open: false,
            closeSign: false,
            deleteLabelSign: false
        }
    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
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

    DeleteNotifySignChange = () => {
        this.setState({
            deleteLabelSign: !this.state.deleteLabelSign
        })
    }

    componentDidMount() {
        this.setState({
            labels: this.props.labels
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
                        <DialogTitle className="dialogPadding" >Edit Labels</DialogTitle>

                        <DialogContent className="dialogPadding" >

                            <div style={{ display: 'flex' }} >

                                {this.state.closeSign ? (
                                    <img src={require("../assets/images/PlusSign.svg")}
                                        alt="addLabel"
                                        className="dialogPadding"
                                        onClick={this.ClosePlusSignChange} />
                                ) : (
                                        <img src={require("../assets/images/closeIcon.svg")}
                                            alt="editLabel"
                                            className="dialogPadding"
                                            onClick={this.ClosePlusSignChange} />
                                    )}

                                <Input disableUnderline
                                    placeholder="Create new label"
                                    onChange={this.getLabelEdit} />

                                <img src={require("../assets/images/rightTick.svg")}
                                    alt="AddLabel"
                                    className="dialogPadding"
                                    onClick={this.props.getLabelCreated} />
                            </div>

                            {this.props.labels.map((labels, index) => {
                                return <div key={index}
                                    style={{ display: "flex", height: "50px" }} >


                                    {this.state.deleteLabelSign ? (
                                        <img src={require("../assets/images/labelDelete.svg")}
                                            alt="labelDelete"
                                            className="dialogPadding"
                                            onClick={this.ClosePlusSignChange}
                                            onMouseLeave={this.DeleteNotifySignChange} />
                                    ) : (
                                            <img src={require("../assets/images/labelBullet.svg")}
                                                alt="labelBullet"
                                                className="dialogPadding"
                                                onClick={this.ClosePlusSignChange}
                                                onMouseEnter={this.DeleteNotifySignChange} />
                                        )}

                                    <Input disableUnderline
                                        placeholder={labels.labels}
                                        // value={labels.labels}
                                        onChange={this.getLabelEdit}
                                        onMouseEnter={this.DeleteNotifySignChange}
                                        onMouseLeave={this.DeleteNotifySignChange} />

                                    <img src={require("../assets/images/SideBarLabelImage.svg")}
                                        alt="SideBarLabelImage"
                                        className="dialogPadding"
                                        onClick={this.props.getLabelCreated} />

                                </div>
                            })}
                            {/* </div> */}
                        </DialogContent>

                        <DialogActions >
                        </DialogActions>
                    </Dialog>
                </MuiThemeProvider>

                <div onClick={this.handleOpen} >
                    <img src={require('../assets/images/SideBarLabelImage.svg')}
                        alt="label"
                        className="sideBarImages" />
                    <span>Edit Labels</span>
                </div>

            </div>
        )
    }
}