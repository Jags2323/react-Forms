import React from 'react';
import MyContext from './components/MyContext';
import ComponentA from './components/ComponentA';

const App = () => {
  const sharedData = {
    message: 'Hello from the Context!',
  };

  return (
    <MyContext.Provider value={sharedData}>
      <ComponentA />
    </MyContext.Provider>
  );
};

export default App;
