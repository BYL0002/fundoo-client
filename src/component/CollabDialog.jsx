/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';
import { Dialog, DialogContent, DialogActions, createMuiTheme, MuiThemeProvider, Avatar } from '@material-ui/core';
import { Card, Button } from '@material-ui/core';
import NoteService from '../service/NoteService';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiDialog: {
            paperWidthSm: {
                width: 600,
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
export default class CollabDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            users: []
        }
    }
    componentDidMount() {

        let request = {
            thread: "/AllUsersDisplay",
            data: {
                userId: localStorage.getItem("userLoggedId")
            }
        }

        var self = this;

        NoteService.NoteDisplay(request, (err, data) => {

            if (data !== null && data !== undefined) {

                let tempArrayOfNotes = [];

                for (let i = 0; i < data.length; i++) {
                    // console.log("response.data.message[i].note---", response.data.message[i].note);

                    tempArrayOfNotes.push(data[i].note);
                }

                self.setState({
                    notesDisplay: tempArrayOfNotes
                })
            }
            else {
                self.setState({
                    notesDisplay: []
                })
            }
        });

    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
        });
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
                        {/* <DialogContent id="dialogPaddingCollab" > */}

                        <div>

                            <Card style={{ width: "100%", border: "none" }} >
                                <div  >
                                    <div className="CollaboratorHeading" >
                                        <span  >Collaborators</span>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }} >
                                    <div>
                                        <Avatar className="userIconPopperTopBar"
                                            style={{ backgroundColor: "cadetblue" }} >

                                            {localStorage.getItem("userLogName")[0]}

                                        </Avatar>

                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", marginTop: "14px" }}>
                                        <b> {localStorage.getItem("userLogName")} (Owner) </b>
                                        <b> {localStorage.getItem("userLogged")} </b>
                                    </div>
                                </div>
                            </Card>

                        </div>

                        {/* </DialogContent> */}

                        <DialogActions >
                            <Button onClick={this.handleAddNoteCardDisplay} >Close</Button>
                        </DialogActions>
                    </Dialog>
                </MuiThemeProvider>

                <div onClick={this.handleOpen} >

                    <img className="noteAddFeatureImages"
                        src={require('../assets/images/personAdd.svg')}
                        alt="addPerson" />

                </div>

            </div>
        )
    }
}