/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';
// import FileBase64 from 'react-file-base64';

// var files = [];

/**
 * @description Class Component
 * @exports Class to render
 */
export default class UploadImage extends React.Component {

    triggerInputFile = () => {
        console.log("galat hai")
        this.fileInput.click();
    }

    getImage = (event) => {
        console.log('event.target.value',event.target.files[0]);
        let requestImageDetails = {
            file : event.target.files[0],
            name : "file"
        }
        this.props.getImage(requestImageDetails, this.props.noteSelected );
    }

    render() {
        return (
            <div>
                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" onClick={this.triggerInputFile} />

                <input ref={fileInput => this.fileInput = fileInput} type="file" style={{ 'display': 'none' }} 
                onChange={this.getImage} name="file" />
            </div>
        )
    }
}