/**
 * @description Class to send request
 * @author Yash
 * @since 19/12/2018
 * @version 1.1
 */

const axios = require('axios');

export class NoteServiceClass {
    sendUpdateRequest(request) {
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
    // class
    NotesUpdation(request) {

        console.log('request on sservice ------', request);

        return this.sendUpdateRequest(request)
            .then(res => {
                console.log('res on function', res);
            })
    }
}