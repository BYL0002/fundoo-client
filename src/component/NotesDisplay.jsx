/**
 * @description Component to display Notes
 * @author Yash
 * @since 8/12/18
 * @version 1.1
 */
import React from 'react';
import { Card } from '@material-ui/core';

export default class NotesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layoutDefault: "list"
        }
        this.handleLayoutDisplay = this.handleLayoutDisplay.bind(this);
    }

    handleLayoutDisplay(event) {

    }

    render() {
        let NotesDisplayDivClass;
        if(this.props.sidebarStatus)
        {
            NotesDisplayDivClass = "NotesDisplayDivSidebarOpen";
        }
        else
        {
            NotesDisplayDivClass = "NotesDisplayDivSidebarClose";
        }
        const Notes = [
            {
                title: "asdsfsdf",
                notes: "csdfcdfgvdfgdf"
            },
            {
                title: "asfsdfdgfdghfdh",
                note: "asdsafsf232jnh b"
            },
            {
                title: "40asdnvnoc",
                note: "5245445njnsdcnjksdnjk"
            },
            {
                title: "40asdnvnoc",
                note: "5245445njnsdcnjksdnjk"
            },
            {
                title: "40asdnvnoc",
                note: "5245445njnsdcnjksdnjk"
            }

        ]
        return (
            <div className = {NotesDisplayDivClass} >
                {this.props.notesView ? (
                    <div className = "notesGridDisplayDiv" >
                        {Notes.map( (option, index) => (
                            <Card className = "notesGridDisplayCard" >{option.title}</Card>
                        ) )}
                    </div>
                ) : (
                        <div className = "notesListDisplayDiv" >
                            {Notes.map( (option, index) => (
                            <Card className = "notesListDisplayCard" >{option.title}</Card>
                        ) )}
                        </div>
                    )}

            </div>
        )
    }
}