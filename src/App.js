import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0}
    ],
    totalCount: 0
  }

  handleIncrement = habit => {
    console.log(`app.js -  handleIncrement: ${habit.name}`);
    const {id, name, count} = habit;
    
    // const newHabits = [...this.state.habits]
    // const findIndex = this.state.habits.findIndex(e => e.id === id)
    // if(findIndex !== -1) newHabits[findIndex] = { ...newHabits[findIndex], count: count + 1 }
    // this.setState({habits: newHabits})

    // Ellie Solution
    /*
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({habits}) // 여기서 key 와 value의 변수값이 같을 경우 이렇게 하나로 써줘도 무방함. habits: habits 와 동일.!
    */

    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return { ...habit, count: habit.count + 1}
      }
      return item
    })
    this.setState({habits})


  };
  handleDecrement = habit => {
    console.log(`app.js - handleDecrement: ${JSON.stringify(habit)}`);
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
    

    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1
        return { ...habit, count: count < 0 ? 0 : count}
      }
      return item
    })
    this.setState({habits})

  };
  handleDelete = habit => {
    console.log(`app.js - handleDelete: ${JSON.stringify(habit)}`);
    const {id, name, count} = habit;

    const newHabits = [...this.state.habits];
    this.setState({habits: newHabits.filter(e => e.id !== id)})

    // setStudents(students.filter(student => student.id !== id));
  };

  handleAddInput = name => {
    console.log('app.js - handleAddInput: ', name);
    const id = this.state.habits.length + 1
    const habit = {
        id: id,
        name,
        count: 0,
    }
    const habits = [...this.state.habits, habit]
    this.setState({habits})
  };

  handleResetAll = event => {
    console.log(`app.js - handleResetAll() : ${event}`);
    console.log(this.state.habits);
    
    // const habits = [...this.state.habits]
    // habits.filter(value => value.count = 0)
    // console.log('habits : ', habits);
    // this.setState({habits})

    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0) {
        return { ...habit, count: 0}
      }
      return habit
      
      
    })
    this.setState({habits})
    


  };

  handleTotalCount = (habits) => {
    console.log(`handleTotalCount() : ${this.state.habits}`);

    const totalCount = habits.filter(e => e.count > 0).length
    console.log('totalCount : ', totalCount);
    // this.setState({totalCount})  // setState를 해주면 무한루프에 걸림.. 

  };

  render(){
    console.log('app.js - render()');
    // this.handleTotalCount(this.state.habits)
    return(
      <>
        <Navbar
          // totalCount={this.state.totalCount}
          totalCount={this.state.habits.filter(e => e.count > 0).length }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAddInput={this.handleAddInput}
          onResetAll={this.handleResetAll}
        />
      </>
      
    )
  };
}

export default App;
