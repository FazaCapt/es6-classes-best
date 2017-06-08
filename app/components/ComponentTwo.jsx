import React from 'react';

class ComponentTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 9
        };
    }
    render () {
        return (
            <div>
                <h3>Component Two using React.Component</h3>
                <p>Current count: {this.state.count}</p>
            </div>

        )
    }
}

export default ComponentTwo;