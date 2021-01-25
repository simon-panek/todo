import React, { useEffect, useState, useContext } from 'react';
import {LoginContext} from './context/loginContext.js';

function Auth(props) {
  const loginContext = useContext(LoginContext);
  
  const [okToRender, setOKToRender] = useState(false);

  useEffect(() => {
    console.log('loginContex.loggedIn ', loginContext.loggedIn);
    console.log('loginContext.user.capabilities ', loginContext.user.capabilities);
    setOKToRender(loginContext.loggedIn && (props.capability ? loginContext.user.capabilities.includes(props.capability) : false));
  },[loginContext.loggedIn, props.capability])

  console.log(okToRender, loginContext.loggedIn);

  return (
    okToRender && 
      <div>{props.children}</div>
  )
}

export default Auth;