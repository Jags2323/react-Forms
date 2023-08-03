import React from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

const ComponentA = () => {
  return (
    <div>
      <MyContext.Consumer>
        {({ message }) => (
          <p>Received from Context: {message}</p>
        )}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
