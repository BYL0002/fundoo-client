import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Typography, MenuItem, Menu } from '@material-ui/core';

class TemporaryDrawer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         left: true,
    //         anchorEl: null,
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick = event => {
    //     this.setState({ anchorEl: event.currentTarget });
    // };

    render() {
        const sideItems = (
            <div>
                <MenuItem></MenuItem>
            </div>
        );
        console.log("sidebar",this.props.stateOpen)
        return (
            <div>
                {/* <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button> */}
                <Drawer
                variant="persistent"
                 open={this.props.stateOpen}
                 width={250} >
                    {/* <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    > */}
                    <MenuItem>abcd</MenuItem>
                    {/* </div> */}
                </Drawer>
            </div>
        );
    }
}

/**
 * @exports TemporaryDrawer class component
 */
export default TemporaryDrawer;
