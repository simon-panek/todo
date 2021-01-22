import React from 'react';

import ToDo from './components/todo/todo-connected.js';
import NavBar from './components/todo/nav.js';
import AppSettingsContext from './components/todo/context/appSettingsContext.js';
import LoginContext from './components/todo/context/loginContext.js';


const App = () => {
  return (
      <>
      <LoginContext>
          <NavBar />
        <AppSettingsContext>
          <ToDo />
        </AppSettingsContext>
      </LoginContext>
      </>
    );
}

export default App;