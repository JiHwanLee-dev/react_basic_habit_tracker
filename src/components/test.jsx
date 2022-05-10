import React, { Component } from 'react';

class test extends Component {
    state = {
        numberOfLink: 0
    };
    
    render() {
        // console.log('this.props: ', this.props);
        // const aa = this.props !== undefined ? 0 : this.props;
        // this.setState({numberOfLink: this.state.numberOfLink + aa});

        return (
            <button> {this.state.numberOfLink} </button>
        );
    }
}

export default test;