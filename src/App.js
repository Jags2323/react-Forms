import React from 'react';
import ComponentA from './components/ComponentA';
import { StateProvider } from './components/StateContext';

const App = () => {
  return (
    <StateProvider>
      <ComponentA />
    </StateProvider>
  );
};

export default App;
