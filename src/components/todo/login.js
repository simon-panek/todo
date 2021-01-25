import React, {useContext, useEffect, useState} from 'react';
import { LoginContext } from '../todo/context/loginContext.js';
import cookie from 'react-cookies';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [returningUser, setReturningUser] = useState(false);

  const loginContext = useContext(LoginContext);

  let token = cookie.load('auth');
  useEffect (() => {
    if(token){
      setReturningUser(true);
    }
  },[setReturningUser])

  const handleFormSubmit = (e) => { //send username and pword to context
    e.preventDefault();
    loginContext.login(userName, password);
  }

  const handleNameChange = (e) => { //updates userName state on change of input field
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => { //updates password state on change of input field
    setPassword(e.target.value);
  }

  console.log({userName}, {password});

  return(
    <div>
      {returningUser === true ? '' :  
      <form onSubmit={handleFormSubmit}>
        <input onBlur={handleNameChange} type="text" name="name" placeholder="Name"/>
        <input onBlur={handlePasswordChange} type="password" name="password" placeholder="Password"/>
        <button>Enter</button>
      </form>
      }
    </div>
  )
}

export default Login;