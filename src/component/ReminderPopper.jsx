/**
 * @description Popper Component for reminder
 * @author Yash
 * @since 8/12/18
 * @version 1.1
 */
import React from 'react';
import { Card, InputBase, Button, MenuItem } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

/**
 * @description component to display popper for reminder in notes addition
 * @exports Class Component
 */
export default class ReminderPopper extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
        }
    }
}