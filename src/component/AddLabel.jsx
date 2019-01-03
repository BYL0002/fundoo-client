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
export default class AddLabel extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isPin : false
        }
    }

    render(){
        return (
            <div>
                <img className="sideBarImages" src={require('../assets/images/SideBarLabelImage.svg')} alt="label" />
                    <span className="sideBarText" >Edit Labels</span>
            </div>
        )
    }
}