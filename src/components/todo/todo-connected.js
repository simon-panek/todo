import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
// import NavBar from './nav';
import './todo-connected.scss';
import './todo.scss';
// const axios = require('axios');
import useAjax from './hooks/useAjax.js';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {

  const [list, _addItem, _toggleComplete, deleteItem, _getTodoItems] = useAjax();

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
