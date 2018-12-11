import React from 'react';

export default class MoreOptions extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isTrash : false
        }
    }

    handleTrashing = () => {
        this.setState({
            isTrash : !this.state.isTrash
        })
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}