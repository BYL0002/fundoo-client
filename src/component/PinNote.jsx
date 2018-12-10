import React from 'react';

export default class PinNote extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isPin : false
        }
    }

    render(){
        return (
            {state}
            <img src = {require('../assets/images/pinNote.svg')} alt ="pin note" className = "pinNoteImage" />
        )
    }
}