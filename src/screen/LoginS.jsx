import React from 'react';
import Textfield from '../component/Textfield';
import TextFieldPassword from '../component/TextFieldPassword';
import Login from '../component/Login';
import userService from '../service/user';

let var1;

class LoginS extends React.Component {
    get(value) {
        var1 = value;
        console.log('var1 on screen : ---- ',var1);
        
    }
    render() {
        return (
            <div className = "Form" >
                {/* <Textfield name = "Email" /> */}
                <div>
                { <TextFieldPassword name = "password1" get = {this.get.bind(this)} /> }
                    {console.log('var 1 in screen : ', var1) }
                </div>
            </div>
        )
    }
}
export default LoginS;