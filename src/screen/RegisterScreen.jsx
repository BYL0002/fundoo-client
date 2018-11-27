import React from 'react';
import RegisterComponent from '../component/RegisterComponent';

let var1;

class RegisterScreen extends React.Component {
    get(value) {
        var1 = value;
        console.log('var1 on screen : ---- ',var1);
        
    }
    render() {
        return (
            <div className = "Form" >
                <RegisterComponent name = "Email" />
            </div>
        )
    }
}

/**
 * @exports RegisterScreen
 */
export default RegisterScreen;