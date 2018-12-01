/**
 * @description Services on Client side to send and get request and response from client to server
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */

const axios = require('axios');
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

const EventEmitter = require('events').EventEmitter;
const eventEmitter = new EventEmitter;


const sendRequest = (request) => {
    try {
        console.log('req from service', request.data);
        
        axios.post(request.thread, {
            data: request.data
        })
            .then(response => {
                if (response.data) {
                    window.location.replace("/");
                }
                else {
                    console.log('Registration Failed');
                }
            }).catch(error => {
                console.log('error occured, try later');
            })
    }
    catch (err) {
        console.log(err);
    }
}

function registerUserVerify(request) {

    if (/^[a-z](\.?[a-z0-9]){2,}@gmail\.com$/g.test(request.data.email)) {
        sendRequest(request);
    }
}

function registerService(request) {
    if ((/^[a-zA-Z][\w!]{5,9}$/g.test(request.data.password1)) && (/^[a-zA-Z][\w!]{5,9}$/g.test(request.data.password2))) {

        if (request.data.password1 === request.data.password2) {
            sendRequest(request);
        }
        else {
            console.log('error service page');

        }
    }
    else {
        console.log('error service page');
    }
}

/**
 * @description Method to send request for login already a user from client side to server side
 * @param {String} email
 * @param {String} password 
 */
function loginService(request) {
    if (/^[a-z](\.?[a-z0-9]){2,}@gmail\.com$/g.test(request.data.email)) {

        if (/^[a-zA-Z][\w!]{5,9}$/g.test(request.data.password)) {
            sendRequest(request);
        }
    }
    else {
        console.log('service something left');
    }
}

/**
 * @description Method to send request for logout from client side to server side
 */
function logoutService() {

    let loggedUser = localStorage.getItem("userLogged");
    console.log('service client user logged in ', loggedUser);

    let request = [{
        thread: { thread: "/logout" },
        data: { email: loggedUser }
    }]
    sendRequest(request);
}

/**
 * @description Method to send request for reseting password
 */
function forgotService(request) {
    if (/^[a-z](\.?[a-z0-9]){2,}@gmail\.com$/g.test(request.data.email)) {
        sendRequest(request);
    }
}

/**
 * @description Method to send request for reseting password
 */
function resetPasswordService(email) {

    if (/^[a-z](\.?[a-z0-9]){2,}@gmail\.com$/g.test(email)) {

        sendRequest(email)
    }

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

function emitterLogin(userDetails) {

    eventEmitter.emit("request", userDetails);
}


module.exports = { registerService, loginService, logoutService, forgotService, resetPasswordService, registerUserVerify, emitterLogin, sendRequest };

