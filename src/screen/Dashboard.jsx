import React from 'react';
import { Redirect } from 'react-router-dom';
import Topbar from '../component/Topbar';
import AddNotes from '../component/AddNotes';

class Dashboard extends React.Component {

    constructor() 
    {
        super();
        this.state = {
            drawerStatus : ""
        }
        this.handleDrawerStatus = this.handleDrawerStatus.bind(this);
    }


    handleDrawerStatus = (status) => {
        this.setState({
            drawerStatus : status
        })   
    }
    
    render() {
        if (localStorage.getItem('userLogToken') === null) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <Topbar getTopBarStatus = {this.handleDrawerStatus} />
                <AddNotes drawerStatus = {this.state.drawerStatus} />
            </div>
        )
    }
}

export default Dashboard;