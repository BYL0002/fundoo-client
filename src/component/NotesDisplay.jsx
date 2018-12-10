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
        const Notes = [
            {
                title : "asdsfsdf",
                notes : "csdfcdfgvdfgdf"
            },
            {
                title : "asfsdfdgfdghfdh",
                note : "asdsafsf232jnh b"
            },
            {
                title : "40asdnvnoc",
                note : "5245445njnsdcnjksdnjk"
            }

        ]
        return (
            <div className = "NotesDisplayDiv" >
            {this.state.layoutDefault === "grid" ? (
                <div>
                    <Card>
                        <div>
                            asfsdfdgfdghfdh
                        </div>
                    </Card>
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