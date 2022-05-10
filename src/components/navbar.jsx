import React, { Component } from 'react';

class Navbar extends Component {
    state = {
        totalCount: 0   
    }
    setTotalCount = (totalCount) => {
        console.log('setTotalCount () : ', totalCount);
        // this.setState({totalCount})
    }

    render() {
        const { totalCount } = this.props
        // this.setTotalCount(totalCount)
        
        return (
            <div className='navbar' >
                <i className='navbar-logo fas fa-leaf' ></i>
                <span> Habit Tracker</span>
                <span className='navbar-count'> {this.props.totalCount} </span> 
            </div>
        );
    }
}

export default Navbar;