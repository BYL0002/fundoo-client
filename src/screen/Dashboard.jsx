import React from 'react';
import { Redirect } from 'react-router-dom';
import Topbar from '../component/Topbar';
import AddNotes from '../component/AddNotes';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            drawerStatus: "",
            noteViewStatus: true,
            sidebarTabSelected: "",
            sideBarSelected:""
        }
        this.handleDrawerStatus = this.handleDrawerStatus.bind(this);
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

    render() {
        if (localStorage.getItem('userLogToken') === null) {
            return <Redirect to="/" />
        }

        return (
            // eslint-disable-next-line

            <div>
                <Topbar getTopBarStatus={this.handleDrawerStatus} notesView={this.handleNotesView} sideBarSelected={this.sideBarSelected} />
                <AddNotes drawerStatus={this.state.drawerStatus} notesView={this.state.noteViewStatus} getSidebarTabSelected={this.getSidebarTabSelected} sideBarSelected={this.state.sideBarSelected} />
            </div>
        )
    }
}

export default Dashboard;