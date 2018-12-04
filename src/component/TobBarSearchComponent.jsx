import React from 'react';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


class TopBarSearchComponent extends React.Component {
    render() {
        return (
            <div className="topBarSearchDiv" >
                <SearchIcon className="topBarSearchIcon" />
                <InputBase className = "topBarSearchBar" placeholder="Search" />
            </div>
        )
    }
}

export default TopBarSearchComponent;