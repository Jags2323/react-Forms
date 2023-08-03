import React from 'react';
import MyContext from './MyContext';

const ComponentB = () => {
  return (
    <div>
      <MyContext.Consumer>
        {({ message }) => (
          <p>Received from Context in Component B: {message}</p>
        )}
      </MyContext.Consumer>
    </div>
  );
};

export default ComponentB;
