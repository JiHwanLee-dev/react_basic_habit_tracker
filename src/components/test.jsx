import React, { PureComponent } from 'react';

class test extends PureComponent {
    state = {
        count: 0
    };
    
    render() {
        // console.log('this.props: ', this.props);
        // const aa = this.props !== undefined ? 0 : this.props;
        // this.setState({numberOfLink: this.state.numberOfLink + aa});

        return (
            <>
                <span> {this.state.count} </span>
                <button onClick={() => {
                    const count = this.state.count + 1
                    // this.state.count++
                    this.setState({count})
                }} > 
                    버튼
                </button>
            </>
            
        );
    }
}

export default test;