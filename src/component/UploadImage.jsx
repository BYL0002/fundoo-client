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

    }

    render() {
        return (
            <span>
                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" onClick={this.triggerInputFile} />

                <input ref={fileInput => this.fileInput = fileInput} type="file" style={{ 'display': 'none' }} onChange={this.getImage} id="imageFile" value="" name="" />
            </span>
        )
    }
}