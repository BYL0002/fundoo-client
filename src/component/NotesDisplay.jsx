/**
 * @description Component to display Notes
 * @author Yash
 * @since 8/12/18
 * @version 1.1
 */
import React from 'react';
import { Card, Grid, Paper } from '@material-ui/core';

export default class NotesDisplay extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            layoutDefault : "grid"
        }
        this.handleLayoutDisplay = this.handleLayoutDisplay.bind(this);
    }

    handleLayoutDisplay (event) {

    }

    render() {
        return (
            <div className = "NotesDisplayDiv" >
            {this.state.layoutDefault === "grid" ? (
                <div>
                <Grid>
                    <Paper style={{textAlign:"center", padding:"2px"}} >asddfvfv</Paper>
                    <Paper>asddfvfv</Paper>
                    <Paper>asddfvfv</Paper>
                    <Paper>asddfvfv</Paper>
                    <Paper>asddfvfv</Paper>
                    <Paper>asddfvfv</Paper>
                    <Paper>asddfvfv</Paper>
                </Grid>
                <Grid>
                    <Paper />
                </Grid>
                </div>
            ):(
                <span>
                    <Card>
                        <div>
                            <div style = {{fontSize:'30px'}} >Note</div>
                        </div>
                    </Card>
                </span>
            )}
                
            </div>
        )
    }
}