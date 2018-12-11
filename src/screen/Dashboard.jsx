import React from 'react';
import { Redirect } from 'react-router-dom';
import Topbar from '../component/Topbar';
import AddNotes from '../component/AddNotes';

class Dashboard extends React.Component {

    constructor() 
    {
        super();
        this.state = {
            drawerStatus : "",
            noteViewStatus : true
        }
        this.handleDrawerStatus = this.handleDrawerStatus.bind(this);
    }


    handleDrawerStatus = (status) => {
        this.setState({
            drawerStatus : status
        })   
    }
    
    handleNotesView = (status) => {
        this.setState({
            noteViewStatus : status
        })
    }

    render() {
        if (localStorage.getItem('userLogToken') === null) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <Topbar getTopBarStatus = {this.handleDrawerStatus} notesView = {this.handleNotesView} />
                <AddNotes drawerStatus = {this.state.drawerStatus} notesView = {this.state.noteViewStatus} />
            </div>
        )
    }
}

export default Dashboard;