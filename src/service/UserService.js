/**
 * @description Services on Client side to send and get request and response from client to server
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */

const axios = require('axios');

function registerService(email, password1, password2) {
    try {
        if (email === "" && password1 === "" && password2 === "") throw 'Empty'
        {
            if (/^[a-z](\.?[a-z0-9]){2,}@gmail\.com$/g.test(email)) {
                
                if ( (/^[a-zA-Z][\w!]{5,9}$/g.test(password1) ) && (/^[a-zA-Z][\w!]{5,9}$/g.test(password2) ) ) {
                
                    if (password1 === password2) {
                            axios.post('/register', {
                                email: email,
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
            else {
                alert('Email-id not valid');
            }
        }
    }
    catch(err) {
        console.log(err);        
    }
}

/**
 * @description Method to send request for login already a user from client side to server side
 * @param {String} email_id 
 * @param {String} password 
 */
function loginService(email, password) {
    
    axios.post('/login', {
        email: email_id,
        password: password
    })
    .then(response => {
        console.log(response);
        if (response.data) {
            console.log('successful login');
            alert('Successful Login');
            localStorage.setItem('user_login', email_id);
            window.location.replace('/chat_page')
        }
        else {
            console.log('No Such User Exits');
            alert('No Such User Exits');
        }
    }).catch(error => {
        console.log('error occured, try later');
        console.log(error);
        alert('error occured, try later');
    })
}

/**
 * @description Method to send request for logout from client side to server side
 */
function logoutService() {

    let log_user_email_id = localStorage.getItem("user_login");
    
    axios.post('/logout', {
        log_user_email_id: log_user_email_id,
    })
        .then(response => {
            console.log(response);
            if (response.data) {
                console.log('Successful Logout');
                localStorage.clear();
                window.location.replace("/");
                // return response;
            }
            else {
                console.log('logout Failed');
                alert('Logout Failed ');
                return null;
            }
        }).catch(error => {
            console.log('Logout error up on server');
            alert('error occured, try later');
            console.log(error);
            return null;
        })
}

/**
 * @description Method to send request for reseting password
 */
function forgotService(email) {
    axios.post('/forgot_password', {
        user_forgot_email_id: email,
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

module.exports = {registerService, loginService, logoutService, forgotService, resetPasswordService};