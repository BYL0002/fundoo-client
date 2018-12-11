/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

import React from 'react';

/**
 * @description Class Component
 * @exports Class to render
 */
export default class ArchiveNote extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isArchive : true
        }
    }

    handleArchive = () => {
        this.setState({
            isArchive : !this.state.isPin
        })
        console.log('archive component status', this.state.isArchive);
        
        this.props.getArchive(this.state.isArchive);
    }

    render(){
        return (
            <span>
                <img className="noteAddFeatureImages" src={require('../assets/images/archiveImage.svg')} alt="archive" onClick = {this.handleArchive} />
            </span>
        )
    }
}