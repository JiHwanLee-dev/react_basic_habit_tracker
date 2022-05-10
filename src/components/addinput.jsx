import React, { memo, PureComponent, useState } from 'react';

const Addinput = memo(props => {    // memo 함수는 클래스 컴포넌트의 PureComponent 와 같은 역활을 한다. 
    const [habit, setHabit] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault(); // onSubmit시 창이 새로고침이 되지 않게 하는 함수.
        props.onAddSubmit(habit)
        setHabit('')
        // this.setState({habit: ''})
    }

    const handleChange = (e) => {
        const habit = e.target.value
        setHabit(habit)
        // this.setState({habit})
    }
    console.log('addinput.jsx render()')
    return (
        <form className='add-form' onSubmit={handleSubmit} >
            <input className='add-input' type="text"  value={habit} onChange={handleChange} placeholder='Habit' />
            <button className='add-button' type='submit'> Add </button>
        </form>
    );
});

export default Addinput;


/*
class Addinput extends PureComponent {
    formRef = React.createRef()
    inputRef = React.createRef()

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAddSubmit(name)
        this.formRef.current.reset()

    }

    render() {
        return(
            <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit} >
                <input 
                    ref={this.inputRef} 
                    className='add-input' 
                    type="text"  
                    placeholder='Habit' />
                <button className='add-button'> Add </button>
            </form>
        )
    }
*/

    /*
    state = {
        habit: ''
    }

    handleSubmit = (event) => {
        event.preventDefault(); // onSubmit시 창이 새로고침이 되지 않게 하는 함수.
        this.props.onAddSubmit(this.state.habit)
        this.setState({habit: ''})
    }

    handleChange = (e) => {
        const habit = e.target.value
        this.setState({habit})
    }

    render() {
        console.log('addinput.jsx');
        return (
            <form className='add-form' onSubmit={this.handleSubmit} >
                <input className='add-input' type="text"  value={this.state.habit} onChange={this.handleChange} placeholder='Habit' />
                <button className='add-button' type='submit'> Add </button>
            </form>
        );
    }
    
}

export default Addinput;
*/