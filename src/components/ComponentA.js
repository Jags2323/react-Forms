import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import ComponentB from './ComponentB';

const ComponentA = () => {
  const { state, dispatch } = useContext(StateContext);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
