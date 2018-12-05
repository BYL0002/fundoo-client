import React from 'react';
import { Input, Card, CardContent, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    overrides :{
        MuiCardContent :{
            root : {
                paddingTop:12,
            },
        },
        MuiInput : {
            root :{
                width:230,
            }
        }
    }
})

class AddNotes extends React.Component {
    render(){
        return (
            <div >
            <MuiThemeProvider theme ={theme}>
                <Card className = "noteTakeCard" >
                    <CardContent>
                        <Input placeholder = 'Take a note' />
                    </CardContent>
                </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default AddNotes;