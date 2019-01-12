/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';
import { Dialog, DialogContent, DialogActions, createMuiTheme, MuiThemeProvider, Avatar } from '@material-ui/core';
import { Card, Button } from '@material-ui/core';

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
export default class CollabDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
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
                        <DialogContent id="dialogPaddingCollab" >

                            <div style={{ display: 'flex' }} >

                                <Card  >
                                    <div  >
                                        <div className="CollaboratorHeading" >
                                            <span  >Collaborators</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Avatar className="userIconPopperTopBar"
                                        style={{backgroundColor:"cadetblue"}} > { localStorage.getItem("userLogName")[0] } </Avatar>
                                        <h3> {localStorage.getItem("userLogName")} (Owner) </h3>
                                        <h5> {localStorage.getItem("userLogged")} </h5>
                                    </div>
                                </Card>

                            </div>

                        </DialogContent>

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