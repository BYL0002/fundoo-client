import React from 'react';
import RegisterComponent from '../component/RegisterComponent';

class RegisterScreen extends React.Component {
    
    render() {
        return (
            <div>
                <RegisterComponent name = "Email" />
            </div>
        )
    }
}

/**
 * @exports RegisterScreen
 */
export default RegisterScreen;