/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';

const isArchive = false;
/**
 * @description Class Component
 * @exports Class to render
 */
export default class ArchiveNote extends React.Component {
    constructor(props)
    {
        super(props);
    }

    handleArchive = () => {
        this.props.getArchive(!isArchive);
    }

    render(){
        return (
            <span>
                <img className="noteAddFeatureImages" src={require('../assets/images/archiveImage.svg')} alt="archive" onClick = {this.handleArchive} />
            </span>
        )
    }
}