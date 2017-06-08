import React from 'react';

var isAdmin = true;
var adminComponent = (Component) => {
    return class Admin extends React.Component{
        render () {
            if(isAdmin) {
             return (
                <div className="callout secondary">
                    <p className="alert label">Private Admin information</p>
                    <Component {...this.props}/>
                </div>
            )
            } else {
                return null
            }                  
        }
    }
}
/*
var isAdmin = true;
var adminComponent = (Component) => {
    return class Admin extends Component{
        componentDidUpdate() {
            console.log('Admin component did update');

            if(super.componentDidUpdate){
                super.componentDidUpdate();
            }
        }
        render () {
            if(isAdmin) {
             return (
                <div className="callout secondary">
                    <p className="alert label">Private Admin information</p>
                    {/*<Component {...this.props}/>*/}
                    {super.render()}
                </div>
            )
            } else {
                return null
            }                  
        }
    }
}*/


class ComponentTwo extends React.Component {
    // componentDidUpdate() {
    //     console.log('ComponentTwo did update');
    // }
    constructor(props){
        super(props);
        this.state = {
            count: props.count
        };
    }
    render () {
        return (
            <div>
                <h3>Component Two using React.Component</h3>
                <p>Current count: {this.state.count}</p>

                <button className="button" onClick = {() => {
                    this.setState({
                        count: this.state.count + 1
                     });
                    }}>Button One</button>
            </div>

        );
    }
}

ComponentTwo.defaultProps = {
    count: 50
};

ComponentTwo.propTypes = {
    count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);