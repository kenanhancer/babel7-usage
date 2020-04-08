import React from 'react';

class Greeting extends React.Component {
    render() {
        return (<p>Hello <strong>{this.props.name}</strong></p>);
    }
}

export default Greeting;