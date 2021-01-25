import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
// import axios from 'axios';

// const API = process.env.REACT_APP_API;
// const API = 'https://dina-auth-api.herokuapp.com'; //Dina's API
const API = 'https://simonpanek-auth-api.herokuapp.com'; //Simon's API
// REACT_APP_API=https://auth-server-401d39.herokuapp.com <-- Class provided
// Auth API Route=https://simonpanek-auth-api.herokuapp.com/
//https://dina-auth-api.herokuapp.com/signin user: dina  pass: potatoes admin secret = twtse345dgw3541


export const LoginContext = React.createContext();

function LoginProvider(props){
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (username, password) => {
    fetch(`${API}/signin`, {
      method: 'post',
      mode: 'cors', 
      cache: 'no-cache',
      headers: new Headers({
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`
      }),
    })
    .then(response => {
      // console.log('response from server', response);
      return response.json();
    })
    .then(user => {
      console.log('user.token', user.token);
      validateToken(user.token);
    })
  }

  //User Info after login to Simon's API
//   {user: {…}, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…yNDN9.IJnv4E3J0YRlsMyUCnWxubelbXHtg6cobw36hqiNbwY"}
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpbW9uOTkiLCJpYXQiOjE2MTEyOTkyNDN9.IJnv4E3J0YRlsMyUCnWxubelbXHtg6cobw36hqiNbwY"
// user: {role: "admin", _id: "600a1ce173a5700017ffa5c5", username: "simon99", password: "$2b$10$14tPdkZ3QTjkJJnX918nrOFkrS7Ip/lDEK.oYCS3KbtEUR8Knp9Sm", __v: 0, …}
// __proto__: Object


  // User Info After login to Dina's API
  // {user: {role: "admin", _id: "600a560efe5f030017267dc1", username: "dina",…},…}
  // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpbmEiLCJpYXQiOjE2MTEyOTg5MDh9.2hpDai8q74s_Uf1eLFPbJ6sQ0OrNS4HFkXNrzHeexTE"
  // user: {role: "admin", _id: "600a560efe5f030017267dc1", username: "dina",…}
  //

  useEffect(()=>{
    if(cookie.load('auth')){
      let token = cookie.load('auth');
      validateToken(token);
    }
  },[])

  const validateToken = (token) => {
    try {
      console.log('IN Validate Token ', {token});
      let user = jwt.verify(token, process.env.REACT_APP_SECRET) //class secret: Banana | Auth API secret: goldfish
      console.log('user2', {user})
      setLogInState(true,token,user);
    } catch {
      setLogInState(false, null, {});
      console.log('IN CATCH, THIS IS BAD')
    }
  }

  
  const setLogInState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setLoggedIn(true);
    setUser(user);
  }
  
  const state = {
    user,
    loggedIn,
    login: login
  }
  console.log('LOGINCONTEXT ', {loggedIn}); //This is true after signin, but after refreshing page to rerender it is no longer true

  return(
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;