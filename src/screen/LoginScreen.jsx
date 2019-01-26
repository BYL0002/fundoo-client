import React,{Component} from 'react';
// import Textfield from '../component/TextfieldComponent';
// import TextFieldPassword from '../component/TextFieldPasswordComponent';
import LoginComponent from '../component/LoginComponent';
// import userService from '../service/user';

let var1;

class LoginScreen extends Component {
    
    get(value) {
        var1 = value;
        console.log('var1 on screen : ---- ',var1);
        
    }
    render() {
        // debugger;
        return (
            // <div className = "Form" >
            <div className="backgroundImage" >
            
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