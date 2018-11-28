import React from 'react';
import TextFieldComponent from '../component/TextfieldComponent';
import { Button } from '@material-ui/core';

class Register extends React.Component {
    render() {
        return (
            <div className = "Form">
                <TextFieldComponent name = "email" />
                <Button>Submit</Button>
            </div>
        )        
    }
}

export default Register;