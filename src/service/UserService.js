/**
 * @description Services on Client side to send and get request and response from client to server
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */

const axios = require('axios');

function registerUserVerify (name, email) {
    try {
        if(name === "") throw 'name empty' 
        {
            if(email === "") throw "email empty"
            {
                if (/^[a-z](\.?[a-z0-9]){2,}@gmail\.com$/g.test(email)) {
                    axios.post('/registerUserVerify', {
                        name : name,
                        email: email
                    })
                        .then(response => {
                            if (response.data) {
                                alert('successful register client services');
                                window.location.replace("/");
                            }
                            else {
                                alert('Registration Failed');
                            }
                        }).catch(error => {
                            alert('error up on server');
                            console.log('error occured, try later');
                            console.log(error);
                        })
                }

            }
        }
    }
    catch(err) {
        console.log(err);
        
    }
}

function registerService(token, password1, password2) {
    try {
        if (token === "" && password1 === "" && password2 === "") throw 'Empty'
        {
            if ( (/^[a-zA-Z][\w!]{5,9}$/g.test(password1) ) && (/^[a-zA-Z][\w!]{5,9}$/g.test(password2) ) ) {
            
                if (password1 === password2) {
                        axios.post('/register', {
                            token: token,
                            password1: password1,
                            password2 : password2
                        })
                            .then(response => {
                                if (response.data) {
                                    alert('successful register client services');
                                    window.location.replace("/");
                                }
                                else {
                                    alert('Registration Failed');
                                }
                            }).catch(error => {
                                alert('error up on server');
                                console.log('error occured, try later');
                                console.log(error);
                            })
                }
                else {
                    alert("Password doen't match");
                }
            }
            else {
                alert('Password Invalid');
            }
        }
    }
    catch(err) {
        console.log(err);        
    }
}

/**
 * @description Method to send request for login already a user from client side to server side
 * @param {String} email
 * @param {String} password 
 */
function loginService(req, res) {
    // console.log('values', email, password);
    
   return axios.post('/login', {
        email: req.email,
        password: req.password
    })
    .then(response => {
        console.log(response);
        if (response) {
            console.log('successful login');

            localStorage.setItem('userLogged', req.email);
            localStorage.setItem('userLogToken', response.data.token);
            // console.log('sadasfdsf');            
            // console.log(localStorage.getItem("userLogToken"));
            
            // window.location.replace('/dashboard');
            return response.data.status;
        }
        else {
            console.log('No Such User Exits');
        }
    }).catch(error => {
        console.log('error occured, try later');
        console.log(error);
    })
}

/**
 * @description Method to send request for logout from client side to server side
 */
function logoutService() {

    let loggedUser = localStorage.getItem("userLogged");
    console.log('service client user logged in ', loggedUser);
    
    
    axios.post('/logout', {
        email: loggedUser,
    })
        .then(response => {
            console.log(response);
            if (response) {
                console.log('Successful Logout');
                localStorage.clear();
                window.location.replace("/");
                // return response;
            }
            else {
                console.log('logout Failed');
                return null;
            }
        }).catch(error => {
            console.log('Logout error up on server');
            console.log(error);
            return null;
        })
}

/**
 * @description Method to send request for reseting password
 */
function forgotService(email) {
    axios.post('/forgotpassword', {
        email : email,
    })
        .then(response => {
            console.log(response);
            if (response.data) {
                console.log('Successful Link Sent');
                window.location.replace("/");
                alert('Check Account , Email Sent !');
                // return response;
            }
            else {
                console.log('logout Failed');
                alert(' Forgot Password Process Failed ');
                return null;
            }
        }).catch(error => {
            console.log('forgot password error up on server');
            alert('error occured, try later');
            console.log(error);
            return null;
        })
}

/**
 * @description Method to send request for reseting password
 */
function resetPasswordService(email) {
    axios.post('/reset_password', {
        user_forgot_email_id: email,
    })
        .then(response => {
            console.log(response);
            if (response.data) {
                console.log('Successful Password Reset');
                window.location.replace("/");
                alert('Password Reset Successful !');
                // return response;
            }
            else {
                console.log('password reset Failed');
                alert(' Password Reset Process Failed ');
                return null;
            }
        }).catch(error => {
            console.log('reset error up on server');
            alert('error occured, try later');
            console.log(error);
            return null;
        })
}

module.exports = {registerService, loginService, logoutService, forgotService, resetPasswordService, registerUserVerify};