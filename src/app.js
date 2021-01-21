import React from 'react';

import ToDo from './components/todo/todo-connected.js';
import NavBar from './components/todo/nav.js';
import AppSettingsContext from './components/todo/context/appSettingsContext.js';

const App = () => {
  return (
      <>
          <NavBar />
        <AppSettingsContext>
          <ToDo />
        </AppSettingsContext>
      </>
    );
}

export default App;