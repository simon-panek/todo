import { useState, useContext, useEffect } from 'react';
import { AppSettingsContext } from '../context/appSettingsContext.js';

const axios = require('axios');

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

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

  const _addItem = (item) => {
    // console.log('ITEM @ _addItem: ', item);
    item.due = new Date();
    axios.post(todoAPI, {
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
      let url = `${todoAPI}/${id}`;
      axios.delete(url)
        .then(()=> _getTodoItems())
        .catch(console.error);
    }
  };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
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
    axios.get(todoAPI)
      .then(response => {
        let results = response.data.results;
        // console.log({results});
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