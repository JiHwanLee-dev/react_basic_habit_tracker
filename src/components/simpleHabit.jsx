import React, { Component, useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
  console.log('SimpleHabit() ')
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  const handleIncrement = useCallback(() => {
    setCount(count + 1)
  });

  // componentDidMount 와 componentDidUpdate를 하나의 함수로 만들어 놓은거라고 보면 됨. 
  // 
  useEffect( () => {
    console.log(`mounted & update!: ${count}`);
  })

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;



// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

// }

// export default SimpleHabit;
