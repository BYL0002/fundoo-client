/**
 * @description Class Component for pinning the note
 * @author Yash
 * @since 11/12/18
 * @version 1.0
 */

 import React from 'react';

 let pinDefault;

/**
 * @description Class Component
 * @exports Class to render
 */
export default class PinNote extends React.Component {
    constructor(props)
    {
        super(props);
        console.log('pin value set-----', this.props.getNotePin);
        this.state = {
            isPin : this.props.getNotePin
        }
        pinDefault = this.props.getNotePin;
    }

    handlePinning = () => {
        this.setState({
            isPin : !this.state.isPin
        })

        pinDefault = !pinDefault;
        console.log('pin set on pin component----', pinDefault);
        

        this.props.getPin(pinDefault, this.props.noteSelected);
    }

    render(){
        return (
            <span>
                {this.state.isPin ? (
                    <img src = {require('../assets/images/unPinNote.svg')} alt ="pin note" className = "pinNoteImage" onClick = {this.handlePinning} />
                ) : (
                    <img src = {require('../assets/images/pinNote.svg')} alt ="pin note" className = "pinNoteImage" onClick = {this.handlePinning} />
                )}
            </span>
        )
    }
}