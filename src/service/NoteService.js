/**
 * @description Services on Client side to send and get request and response from client to server
 * @author Yash
 * @since 26/11/2018
 * @version 1.1
 */

const axios = require('axios');

const sendRequest = (request) => {
    try {
        // console.log('req from service', request.data);

        return axios.post(request.thread, {
            data: request.data
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
    // console.log('request came on services');
    // console.log(request);    
    
    return sendRequest(request);
}

/**
 * @exports Function to get request from components
 */
module.exports = { NotesAddition };