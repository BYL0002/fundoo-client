import React from 'react';
import { Input, Card, CardContent, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import {NoteAdditionCard} from './ThemesComponent';

const theme = NoteAdditionCard;

class NoteDetails extends React.Component {
    render() {
        return (
            <div>
                <Card className = "noteDetailsCard">
                    <CardContent>
                        <Input placeholder="Title" />
                    </CardContent>
                </Card>
            </div>
        )
    }
}

/**
 * @description AddNotes class component
 */
class AddNotes extends React.Component {
    render(){
        return (
            <div>
            <MuiThemeProvider theme ={theme}>
                <Card className = "noteTakeCard" >
                    <CardContent>
                        <Input placeholder = 'Take a note' onClick = {<NoteDetails />} />
                    </CardContent>
                </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}

/**
 * @exports AddNotes class component
 */
export default AddNotes;