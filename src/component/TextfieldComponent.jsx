/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */
import React from 'react';
import {TextField, Button} from '@material-ui/core';
import userService from '../service/UserService';

class Textfield extends React.Component {
    constructor(props) {
        super(props);
        let stateVariable = props.name;
        console.log('asdasdasdad',stateVariable);
        
        this.state = {
            stateVariable : ''
        }
        this.setValue = this.setValue.bind(this);
    }

    setValue = (event) => {
        this.setState ({
            stateVariable : event.target.value
        })
    }

    handleclick = () => {

    }
    render() {
        console.log('sdfsd', this.state.stateVariable);
        
        return (
            <div>
                <TextField label = {this.props.name} name = {this.state.stateVariable} onChange = {this.setValue} value = {this.state.stateVariable} >
                <Button onClick = {this.handleclick} >Submit</Button>
                </TextField>
            </div>
        )
    }
}

/**
 * @exports Textfield component to get textfield for normal input as to increase reusability
 */
export default Textfield;