/**
 * @description Class to send request
 * @author Yash
 * @since 19/12/2018
 * @version 1.1
 */

const axios = require('axios');

export class NewNoteServiceClass {

    sendUpdateRequest(request) {
        try {
            let tokenForSendNote = localStorage.getItem('userLogToken');

            // console.log('req before axios', request);           

            return axios({
                method: 'post',
                url: request.url,
                headers: {
                    "token" : "" + tokenForSendNote
                },
                data: request.data
            }).then(response => {
                if (response.data.status) {
                    // console.log('res on axios', response.data);

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

    NotesUpdation(request, callback) {

        return this.sendUpdateRequest(request)
            .then(res => {
                console.log('res on function', res);
                return callback(null, res.message);
                
            })
    }

}