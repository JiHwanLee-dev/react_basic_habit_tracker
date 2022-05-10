import React, { PureComponent } from 'react';
import Test from './test';

class Habit extends PureComponent {
    
    // state = {
    //     count: 0
    // };
    componentDidMount() {
        console.log(`habit: ${this.props.habit.name} mounted`);
    }
    componentWillUnmount() {
        console.log(`habit: ${this.props.habit.name} will unMounted `);
    }

    handleIncrement = () => {
        // state 오브젝트 안에있는 count값을 증가한 뒤, state를 업데이트 해줘야 됨 ! 
        // this.state.count += 1;   // 이렇게 할 시, 리액트가 count값이 업데이트가 되었는지 안되었는지 모름. 그래서 setState함수를 쓴다. 
        // const count = this.state.count + 1;
        // this.setState({count: count});

        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = (e) => {
        // const count = this.state.count - 1;
        // this.setState({count: count < 0 ? 0 : count});

        this.props.onDecrement(this.props.habit);
    };
    handleDelete = (e) => {
        this.props.onDelete(this.props.habit);

    };
    render() {
        const {name, count, id} = this.props.habit
        const onIncrement = this.props.onIncrement

        return (
            <>
            <li className='habit'>
                <span className="habit-name"> {name} </span>
                <span className="habit-count"> {count} </span>

                <button className='habit-button habit-increase' onClick={this.handleIncrement} >
                   <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
                   <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className='habit-button habit-delete' onClick={this.handleDelete}>
                   <i className="fa-solid fa-trash"></i>
                </button>
            </li>
            {/* <Test title={'title'} onClick={this.handleIncrement} ></Test> */}
            </>
        );
    } 
}

export default Habit;