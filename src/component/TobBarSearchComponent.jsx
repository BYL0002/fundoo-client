import React from 'react';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


class TopBarSearchComponent extends React.Component {
    render() {
        return (
            <div className="topBarSearchDiv" >
                <div >
                    <SearchIcon className="topBarSearchIcon" />
                    <InputBase placeholder="Search" />
                </div>
            </div>

        )
    }
}

export default TopBarSearchComponent;