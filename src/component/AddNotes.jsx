import React from 'react';
import { Input, Card, CardContent, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

/**
 * @description mui Theme creation
 */
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

/**
 * @description AddNotes class component
 */
class AddNotes extends React.Component {
    render(){
        return (
            <div className = "noteTakeCard" >
            <MuiThemeProvider theme ={theme}>
                <Card >
                    <CardContent>
                        <Input placeholder = 'Take a note' />
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