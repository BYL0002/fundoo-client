/**
 * @description Services on Client side to send and get request and response from client to server
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */

const axios = require('axios');

const sendRequest = (request) => {
    try {
   
        let token = localStorage.getItem('userLogToken');
        return axios.post(request.thread, {
            data: request.data,
            header: {
                token: token
            }
        })
            .then(response => {
                if (response.data.status) {
                    console.log('res on axios', response.data);

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

const getRequest = (request) => {
    try {
   
        let token = localStorage.getItem('userLogToken');
        return axios.get(request.thread, {
            header: {
                token: token
            }
        })
            .then(response => {
                if (response.data.status) {
                    console.log('res on axios', response.data);

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

function NotesAddition(request) {

    return sendRequest(request)
    .then ( res => {
        console.log('res on function', res);
    })
}

function NoteDisplay(request, callback) {
    return getRequest(request)
    .then (res => {
        console.log('res on function', res);
        return callback(null, res);
    }).catch(err => {
        console.log('err in then in function', err);
        
        return callback(err);
    })
}

/**
 * @exports Function to get request from components
 */
module.exports = { NotesAddition, NoteDisplay };