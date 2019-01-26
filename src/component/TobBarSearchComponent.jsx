import React from 'react';
import { InputBase } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

class TopBarSearchComponent extends React.Component {
    render() {
        return (
            <div className="topBarSearchDiv" >
                {/* <span className="searchIconTopBar"> <SearchIcon/></span> */}
                <img className="searchIconTopBar" src={require("../assets/images/searchIcon.svg") } alt="searchIcon" />
                <span > <InputBase id = "topBarSearchBar" placeholder="Search" /></span>
            </div>
        )
    }
}

export default TopBarSearchComponent;