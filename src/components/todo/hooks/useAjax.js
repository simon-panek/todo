import { useState, useContext, useEffect } from 'react';
import { AppSettingsContext } from '../context/appSettingsContext.js';
import cookie from 'react-cookies';

const axios = require('axios');

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo'; <-- Class provided
const todoAPI = 'https://simonpanek-auth-api.herokuapp.com'; //<-- Auth API

const useAjax = () => {

  const appSettingsContext = useContext(AppSettingsContext);
  const [list, setList] = useState([]);

  useEffect(()=>{ //THIS IS WORKING EXCEPT ON THE ORIGINAL RENDER??
    // console.log({list});
    list.sort((a,b) => {
      return (a[appSettingsContext.sortMethod] > b[appSettingsContext.sortMethod])? 1 : -1;
    })
    setList(list);
  });

//notes from Dina
  //let token = cookie.load('auth'); <-- to bring in the token from the cookies
  let token = cookie.load('auth');

  //const [list, setList] = useState([]);
  //const appSettingsContext = useContext(AppSettingsContext);
  // //todo: get the token from our login context
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const _addItem = (item) => {
    // console.log('ITEM @ _addItem: ', item);
    item.due = new Date();
    axios.post(`${todoAPI}/api/v2/todo`, {
      assignee: item.assignee,
      complete: false,
      difficulty: item.difficulty,
      text: item.text,
      __v: 0,
    })
      .then(response => {
        // console.log(response.data);
        let savedItem = response.data;
        // console.log({savedItem});
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      // item.complete = !item.complete;
      let url = `${todoAPI}/api/v2/todo/${id}`;
      axios.delete(url)
        .then(()=> _getTodoItems())
        .catch(console.error);
    }
  };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/api/v2/todo/${id}`;
      axios.put(url,{
        complete: item.complete
        }
      )
        .then(response => {
          console.log({response});
          setList(list.map(listItem => listItem._id === item._id ? response.data : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    axios.get(`${todoAPI}/api/v2/todo/`)
      .then(response => {
        let results = response.data;
        console.log({results});
        setList(results);
      })
      .catch(console.error);
  };

  return [
    list,
    _addItem,
    _toggleComplete,
    deleteItem,
    _getTodoItems
  ]

}

export default useAjax;