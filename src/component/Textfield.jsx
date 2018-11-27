/**
 * @description Login Component
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */
import React from 'react';
import {TextField} from '@material-ui/core';

class Textfield extends React.Component {
    constructor(props) {
        super(props);
        let stateVariable = props.name;
        console.log(stateVariable);
        
        this.state = {
            stateVariable : ''
        }
        this.setValue = this.setValue.bind(this);
    }

    setValue = (event) => {
        this.setState ({
            variable : event.target.value
        })
    }

    render() {
        console.log('sdfsd', this.state.stateVariable);
        
        return (
            <div>
                <TextField label = {this.props.name} name = {this.state.stateVariable} variant = "outlined" 
                    onChange = {this.setValue} value = {this.state.stateVariable}
                >
                </TextField>
            </div>
        )
    }
}

/**
 * @exports Textfield component to get textfield for normal input as to increase reusability
 */
export default Textfield;