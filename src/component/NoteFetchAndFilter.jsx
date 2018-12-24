/**
 * @description Component to display Notes
 * @author Yash
 * @since 8/12/18
 * @version 1.12
 */

import React from 'react';
import { Card, Chip, Snackbar, IconButton } from '@material-ui/core';
import NoteService from '../service/NoteService';
import ReminderPopper from './ReminderPopper';
import ColorSection from './ColorSection';
import ArchiveNote from './ArchiveNote';
import MoreOptions from './MoreOptions';
import PinNote from './PinNote';
import CloseIcon from '@material-ui/icons/Close';
// import NoteServiceClass from '../service/NoteServiceClass';
const NoteServiceClass = require('../service/NoteServiceClass');

const NoteServiceClassObject = new NoteServiceClass.NoteServiceClass();

let notesLayoutDiv, notesLayoutClass;
export default class NotesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesDisplay: [],
            snackbarStatus: false,
            snackbarMessage: "Reminder!"
        }
    }

    componentDidMount() {
        console.log('localStorage.getItem("userLogged")------', localStorage.getItem("userLoggedId"));
        
        let request = {
            thread: "/noteDisplay",
            data : {
                userId : localStorage.getItem("userLoggedId")
            }
        }

        var self = this;

        NoteService.NoteDisplay(request, (err, data) => {

            if (data !== null && data !== undefined) {
                self.setState({
                    notesDisplay: data
                })
            }
            else {
                self.setState({
                    notesDisplay: []
                })
            }
        });
    }

    render() {

        return (
            <div >
            </div>
        )
    }
}