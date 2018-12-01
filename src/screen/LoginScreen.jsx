import React from 'react';
// import Textfield from '../component/TextfieldComponent';
// import TextFieldPassword from '../component/TextFieldPasswordComponent';
import LoginComponent from '../component/LoginComponent';
// import userService from '../service/user';

let var1;

class LoginScreen extends React.Component {
    get(value) {
        var1 = value;
        console.log('var1 on screen : ---- ',var1);
        
    }
    render() {
        return (
            // <div className = "Form" >
            <div >
                <LoginComponent name = "Email"/>
                {/* <Textfield name = "Email" />
                { <TextFieldPassword name = "password1" get = {this.get.bind(this)} /> }
                {console.log('var 1 in screen : ', var1) } */}
            </div>
        )
    }
}

/**
 * @exports LoginScreen
 */
export default LoginScreen;