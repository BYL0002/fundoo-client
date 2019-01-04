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

        this.fileInput.click();
    }

    getImage = (event) => {

        this.props.getImage(event.target.files[0], this.props.noteSelected );
    }

    render() {
        return (
            <div>
                <img className="noteAddFeatureImages" src={require('../assets/images/imageAdd.svg')} alt="uploadImage" onClick={this.triggerInputFile} />

                <input ref={fileInput => this.fileInput = fileInput} type="file" style={{ 'display': 'none' }} 
                onChange={this.getImage} name="image" />
            </div>
        )
    }
}