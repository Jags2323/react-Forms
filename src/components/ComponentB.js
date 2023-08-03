import React, { useContext } from 'react';
import { StateContext } from './StateContext';

const ComponentB = () => {
  const { state } = useContext(StateContext);

  return (
    <div>
      <p>Received from Context in Component B: {state.count}</p>
    </div>
  );
};

export default ComponentB;
