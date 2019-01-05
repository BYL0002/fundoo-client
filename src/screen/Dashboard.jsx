import React from 'react';
import { Redirect } from 'react-router-dom';
import Topbar from '../component/Topbar';
import AddNotes from '../component/AddNotes';
import NotesDisplay from '../component/NotesDisplay';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            drawerStatus: "",
            noteViewStatus: true,
            sidebarTabSelected: "",
            sideBarSelected:"Notes",
            newNoteCreated:{}
        }
        this.handleDrawerStatus = this.handleDrawerStatus.bind(this);
        this.notedisp = React.createRef();
    }


    handleDrawerStatus = (status) => {
        this.setState({
            drawerStatus: status
        })
    }

    handleNotesView = (status) => {
        this.setState({
            noteViewStatus: status
        })
    }

    getSidebarTabSelected = (tabSelected) => {
        this.setState({
            sidebarTabSelected: tabSelected
        })
    }

    sideBarSelected = (sideBarSelected) => {
        this.setState({
            sideBarSelected:sideBarSelected
        })
    }

    newNoteCreated = (newNote) => {
        // debugger;
        this.setState({
            newNoteCreated:newNote
        })

        this.notedisp.current.addNewNote(newNote);
    } 

    render() {
        if (localStorage.getItem('userLogToken') === null) {
            return <Redirect to="/" />
        }

        return (
            // eslint-disable-next-line

            <div>
                <Topbar getTopBarStatus={this.handleDrawerStatus} notesView={this.handleNotesView}
                 sideBarSelected={this.sideBarSelected} />
                
                <AddNotes drawerStatus={this.state.drawerStatus}
                 notesView={this.state.noteViewStatus} getSidebarTabSelected={this.getSidebarTabSelected}
                  sideBarSelected={this.state.sideBarSelected} newNoteCreated={this.newNoteCreated} />

                <NotesDisplay ref={this.notedisp} sideBarSelected={this.state.sideBarSelected}
                    getSidebarTabSelected={this.props.getSidebarTabSelected} notesView={this.state.noteViewStatus}
                    sidebarStatus={this.state.drawerStatus} />

            </div> 
        )
    }
}

export default Dashboard;