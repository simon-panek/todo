import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
// import NavBar from './nav';
import './todo-connected.scss';
import './todo.scss';
const axios = require('axios');

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {

  const [list, setList] = useState([]);

  //axios
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
 

  //original
  // const _addItem = (item) => {
  //   // console.log('ITEM @ _addItem: ', item);
  //   item.due = new Date();
  //   fetch(todoAPI, {
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(item)
  //   })
  //     .then(response => response.json())
  //     .then(savedItem => {
  //       setList([...list, savedItem])
  //     })
  //     .catch(console.error);
  // };

  // //ajax
  // const deleteItem = id => {
  //   let item = list.filter(i => i._id === id)[0] || {};
  //   if (item._id) {
  //     item.complete = !item.complete;
  //     let url = `${todoAPI}/${id}`;
  //     axios.delete(url)
  //     // fetch(url, {
  //     //   method: 'delete',
  //     //   mode: 'cors',
  //     //   cache: 'no-cache',
  //     //   headers: { 'Content-Type': 'application/json' },
  //     //   body: JSON.stringify(item)
  //     // })
  //       .then(response => response.json())
  //       .then(savedItem => {
  //         setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
  //       })
  //       .then(()=> _getTodoItems())
  //       .catch(console.error);
  //   }
    
  // };
  // original
  const deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
      fetch(url, {
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .then(()=> _getTodoItems())
        .catch(console.error);
    }
  };

  //ajax
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

  //original
  // const _toggleComplete = id => {
  //   let item = list.filter(i => i._id === id)[0] || {};
  //   if (item._id) {
  //     item.complete = !item.complete;
  //     let url = `${todoAPI}/${id}`;
  //     fetch(url, {
  //       method: 'put',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(item)
  //     })
  //       .then(response => response.json())
  //       .then(savedItem => {
  //         setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
  //       })
  //       .catch(console.error);
  //   }
  // };

//axios
  const _getTodoItems = () => {
    axios.get(todoAPI)
      .then(response => {
        let results = response.data.results;
        console.log({results});
        setList(results);
      })
      .catch(console.error);
  };

  //original
  // const _getTodoItems = () => {
  //   fetch(todoAPI, {
  //     method: 'get',
  //     mode: 'cors',
  //   })
  //     .then(data => data.json())
  //     .then(data => setList(data.results))
  //     .catch(console.error);
  // };

  useEffect(_getTodoItems, []);

  //// useEffect to update list count

  const [count, setCount] = useState([]);
  const countFunction = () => {

    let countString= `There are ${list.filter(item => !item.complete).length} Items To Complete`
    setCount(countString);
  } 
  useEffect(countFunction, [list]);

  const [title, setTitle] = useState(document.title);

  useEffect (() => {

    let titleUpdate= `Todo: ${list.filter(item => !item.complete).length} / Done: ${list.filter(item => item.complete).length}`
    setTitle(titleUpdate);

    return () => {
      document.title = titleUpdate;
    }
  }) //may need `[list]` here to prevent too many renders

  return (
    <>
      <header>
        <h2 id="countH2">
          {count}
          {/* There are {list.filter(item => !item.complete).length} Items To Complete */}
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm sendTodo={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
