import React from 'react';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { MuiThemeProvider } from '@material-ui/core'
import { SearchTabTopBarTheme } from './ThemesComponent';

class TopBarSearchComponent extends React.Component {
    render() {
        return (
            <div className="topBarSearchDiv" >
                <MuiThemeProvider theme = {SearchTabTopBarTheme} >
                    <SearchIcon className="topBarSearchIcon" />
                    <InputBase id="topBarSearchBar" placeholder="Search" />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default TopBarSearchComponent;