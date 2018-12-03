import React from 'react';
import {Redirect} from 'react-router-dom';
import Topbar from '../component/Topbar';

class Dashboard extends React.Component {
    render() {
        if( localStorage.getItem('userLogToken') === null) 
        {
            return <Redirect to = "/" />
        }
        return (
            <Topbar />
        )
    }
}

export default Dashboard;