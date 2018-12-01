/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */
import React from 'react';
import {TextField, Button} from '@material-ui/core';

class Textfield extends React.Component {
    constructor(props) {
        super(props);
        let stateVariable = props.name;
        
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

    handleclick() {
        this.props.get(this.state.stateVariable)
    }

    render() {

        return (
            <div>
                <TextField label = {this.props.name} name = {this.state.stateVariable} onChange = {this.setValue} 
                value = {this.state.stateVariable} >
                </TextField>
                <div>
                <Button onClick = {this.handleclick.bind(this)} >Submit</Button>
                </div>
            </div>
        )
    }
}

/**
 * @exports Textfield component to get textfield for normal input as to increase reusability
 */
export default Textfield;