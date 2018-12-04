import React from 'react';
import {Redirect} from 'react-router-dom';
import Topbar from '../component/Topbar';
import AddNotes from '../component/AddNotes';

class Dashboard extends React.Component {
    render() {
        if( localStorage.getItem('userLogToken') === null) 
        {
            return <Redirect to = "/" />
        }
        return (
            <div id='topdiv'>
            <div><Topbar /></div>
            <dir><AddNotes/></dir>
            </div>            
        )
    }
}

export default Dashboard;