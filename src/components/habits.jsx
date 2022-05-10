import React, { Component } from 'react';
import Addinput from './addinput';
import Habit from './habit';

class Habits extends Component {
    // state = {
    //     habits: [
    //         {id: 1, name: 'Reading', count: 0},
    //         {id: 2, name: 'Running', count: 0},
    //         {id: 3, name: 'Coding', count: 0}
    //     ]
    // }
    handleIncrement = habit => {
        const {id, name, count} = habit;
        
        // const newHabits = [...this.state.habits]
        // const findIndex = this.state.habits.findIndex(e => e.id === id)
        // if(findIndex !== -1) newHabits[findIndex] = { ...newHabits[findIndex], count: count + 1 }
        // this.setState({habits: newHabits})

        // Ellie Solution
        // const habits = [...this.state.habits]
        // const index = habits.indexOf(habit)
        // habits[index].count++
        // this.setState({habits}) // 여기서 key 와 value의 변수값이 같을 경우 이렇게 하나로 써줘도 무방함. habits: habits 와 동일.!

        this.props.onIncrement(habit)

    };
    handleDecrement = habit => {
        // const {id, name, count} = habit;
        // const newHabits = [...this.state.habits]
        // const findIndex = this.state.habits.findIndex(e => e.id === id)
        // if(findIndex !== -1) newHabits[findIndex] = { ...newHabits[findIndex], count: count < 1 ? 0 : count - 1 }
        // this.setState({habits: newHabits})

        // const habits = [...this.state.habits]
        // const index = habits.indexOf(habit)
        // const count = habits[index].count - 1
        // habits[index].count = count < 0 ? 0 : count
        // this.setState({habits})

        this.props.onDecrement(habit)
    };
    handleDelete = habit => {
        // const {id, name, count} = habit;

        // const newHabits = [...this.state.habits];
        // this.setState({habits: newHabits.filter(e => e.id !== id)})

        this.props.onDelete(habit)
    };

    handleSubmit = event => {
        // console.log('habits.length: ', this.state.habits.length)

        this.props.onAddInput(event)

        // const id = this.state.habits.length + 1
        // const habit = {
        //     id: id,
        //     name: event,
        //     count: 0,
        // }
        // const habits = [...this.state.habits, habit]
        // console.log('habits: ', habits);
        // this.setState({habits})
    }

    handleResetAll = event => {
        console.log(`handleResetAll() `);
        event.preventDefault();
        this.props.onResetAll(event)
    };

    render() {
        console.log('habits.jsx render()')
        const {habits, onIncrement, onDecrement, onDelete} = this.props
        console.log('habits : ', habits)
        return (
            <>
                {/* <form className='add-input' onSubmit={this.handleSubmit} >
                    <input className='add-input' type="text" placeholder='Habit' />
                    <button className='add-button' type='submit'> Add </button>
                </form> */}

                <Addinput
                    onAddSubmit={this.handleSubmit}
                />
                
                <ul>
                    {
                        habits.map( (habit, index) => (
                            // TODO: 여기서 배열의 index값은 절대 사용해서는 안된다. 이유는 배열의 값이 삭제될때마다, index번호가 바뀌므로, 고유의 값이 아니기 떄문이다.
                            <Habit 
                                habit={habit} 
                                key={habit.id} 
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            /> 
                            
                        ))
                    }   
                </ul>
                <form onSubmit={this.handleResetAll} >
                    <button className='habits-reset' > Reset All </button>
                </form>

            </>
            
        );
    }
}

export default Habits;