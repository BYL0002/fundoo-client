import React from 'react';
import { Input, Card, CardContent } from '@material-ui/core';

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
                <Card className = "noteTakeCard" onClick = {<NoteDetails />} >
                    <CardContent>
                        <Input placeholder = 'Take a note' />
                    </CardContent>
                </Card>
            </div>
        )
    }
}

/**
 * @exports AddNotes class component
 */
export default AddNotes;