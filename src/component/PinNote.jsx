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
export default class PinNote extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isPin : false
        }
    }

    handlePinning = () => {
        this.setState({
            isPin : !this.state.isPin
        })
    }

    render(){
        return (
            <span>
                {this.state.isPin ? (
                    <img src = {require('../assets/images/pinNote.svg')} alt ="pin note" className = "pinNoteImage" onClick = {this.handlePinning} />
                ) : (
                    <img src = {require('../assets/images/unPinNote.svg')} alt ="pin note" className = "pinNoteImage" onClick = {this.handlePinning} />
                )}
            </span>
        )
    }
}