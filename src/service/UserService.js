/**
 * @description Services on Client side to send and get request and response from client to server
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */

const axios = require('axios');

const sendRequest = (request) => {
    try {
        console.log('req from service', request.data);
        
       return axios.post(request.thread, {
            data: request.data
        })
            .then(response => {
                if (response.data.status) {
                    return response.data.status;
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
        return sendRequest(request);
    }
}

function registerService(request) {
    if ((/^[a-zA-Z][\w!]{5,9}$/g.test(request.data.password1)) && (/^[a-zA-Z][\w!]{5,9}$/g.test(request.data.password2))) {

        if (request.data.password1 === request.data.password2) {
            return sendRequest(request);
        }
        else {
            console.log('error service page');
            return (false);
        }
    }
    else {
        console.log('error service page');
        return false;
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
            localStorage.setItem("userLogged",request.data.email);
             return sendRequest(request);
        }
    }
    else {
        console.log('service something left');
        return false;
    }
}

/**
 * @description Method to send request for logout from client side to server side
 */
function logoutService() {

    let loggedUser = localStorage.getItem("userLogged");
    console.log('service client user logged in ', loggedUser);

    let request = {
        thread: "/logout",
        data: { email: loggedUser }
    }
    return sendRequest(request);
}

/**
 * @description Method to send request for reseting password
 */
function forgotService(request) {
    if (/^[a-z](\.?[a-z0-9]){2,}@gmail\.com$/g.test(request.data.email)) {
        return sendRequest(request);
    }
}

module.exports = { registerService, loginService, logoutService, forgotService, registerUserVerify};