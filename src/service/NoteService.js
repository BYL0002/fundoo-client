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
                // console.log('error occured, try later');
            })
    }
    catch (err) {
        console.log(err);
    }
}

function NotesAddition(request) {

    return sendRequest(request)
    .then ( res => {
        console.log('res', res);
        
    })
}

/**
 * @exports Function to get request from components
 */
module.exports = { NotesAddition };