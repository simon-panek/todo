import reactDomTestUtilsProductionMin from "react-dom/cjs/react-dom-test-utils.production.min";
import React, {useContext, useState} from 'react';
import { LoginContext } from '../todo/context/loginContext.js';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const loginContext = useContext(LoginContext);

  const handleFormSubmit = (e) => { //send username and pword to context
    e.preventDefault();
    loginContext.login(userName, password, email);
  }

  const handleNameChange = (e) => { //updates userName state on change of input field
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => { //updates password state on change of input field
    setPassword(e.target.value);
  }

  const handleEmailChange = (e) => { //updates password state on change of input field
    setEmail(e.target.value);
  }

  const handleRoleChange = (e) => { //updates password state on change of input field
    setRole(e.target.value);
  }

  console.log({userName}, {password}, {email}, {role});

  return(
    <form onSubmit={handleFormSubmit}>
      <input onBlur={handleNameChange} type="text" name="name" placeholder="Name"/>
      <input onBlur={handlePasswordChange} type="password" name="password" placeholder="Password"/>
      <input onBlur={handleEmailChange} type="email" name="email" placeholder="Email"/>
      <label>Role</label>
      <select onChange={handleRoleChange}>
        <option value="user">"user"</option>
        <option value="editor">"editor"</option>
        <option value="admin">"admin"</option>
      </select>
      <button>Enter</button>
    </form>
  )
}

export default Login;