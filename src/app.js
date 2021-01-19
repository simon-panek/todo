import React from 'react';

import ToDo from './components/todo/todo-connected.js';
import NavBar from './components/todo/nav.js';

const App = () => {
  return (
      <>
        <NavBar />
        <ToDo />
      </>
    );
}

export default App;