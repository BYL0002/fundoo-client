/**
 * @description Services on Client side to send and get request and response from client to server
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */

const axios = require('axios');


/**
 * @description request axios with axios
 * @param {requset} request 
 */
const sendRequest = (request) => {
    try {
        let tokenForSendNote = localStorage.getItem('userLogToken');

        let headers = {
            'token': '' + tokenForSendNote
        }

        return axios.post(request.thread,
            headers,
            {
                data: request.data,
                'headers': {
                    'token': '' + tokenForSendNote
                }
            })
            .then(response => {
                if (response.data.status) {
                    console.log('res on axios', response.data);

                    return response.data.message;
                }
                else {
                    console.log('Something Failed');
                }
            }).catch(error => {
                console.log('error occured, try later');
            })
    }
    catch (err) {
        console.log(err);
    }
}

/**
 * @description Image Upload
 * @param {request} request 
 * @param {callback} callback 
 */
function NotesAddition(request, callback) {

    return sendRequest(request)
        .then(res => {
            // console.log('res on function', res);
            return callback(null, res);
        })
}

/**
 * @description GET for Notes & Collab
 * @param {Object} request 
 */
const getRequest = (request) => {
    try {

        let tokenToGetNote = localStorage.getItem('userLogToken');
        // console.log('request.thread', request.thread, tokenToGetNote);

        let config = {
            'headers': {
                'token': '' + tokenToGetNote
            }
        };

        return axios.get(request.thread, config)
            .then(response => {
                if (response.data.status) {

                    // console.log('res on axios', response.data);

                    return response.data.message;
                }
                else {
                    console.log('Something Failed');
                }
            }).catch(error => {
                console.log('error occured, try later');
            })
    }
    catch (err) {
        console.log(err);
    }
}

/**
 * @description Function to send request of get for notes display
 * @param {Object} request 
 * @param {Callback} callback 
 */
function NoteDisplay(request, callback) {

    getRequest(request)
        .then(res => {

            // console.log('res on function', res);
            return callback(null, res);
        }).catch(err => {

            console.log('err in then in function', err);
            return callback(err);
        })
}

/**
 * @description Function to send request for updatation
 * @param {Object} request 
 */
const sendUpdateRequest = (request) => {
    try {
        let tokenForSendNote = localStorage.getItem('userLogToken');

        let headers = {
            'token': '' + tokenForSendNote
        }

        return axios.post(request.thread,
            headers,
            {
                data: request.data,
                'headers': {
                    'token': '' + tokenForSendNote
                }
            })
            .then(response => {
                if (response.data.status) {
                    console.log('res of updation on axios', response.data);

                    return response.data;
                }
                else {
                    console.log('Something Failed');
                }
            }).catch(error => {
                console.log('error occured, try later');
            })
    }
    catch (err) {
        console.log(err);
    }
}

function NotesUpdation(request) {

    return sendUpdateRequest(request)
        .then(res => {
            console.log('res on function', res);
        })
}

/**
 * @exports Function to get request from components
 */
module.exports = { NotesAddition, NoteDisplay, NotesUpdation };