import React, { useState, useReducer } from 'react';
import Todo from './components/Todo';
import './App.css';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newToDo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todos;
      });
    case ACTIONS.DELETE_TODO:
      console.log(todos);
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newToDo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

function App() {
  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  return (
    <div className='App'>
      <h1>To-Dos :)</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div>
        <ul style={{ listStyleType: 'none' }}>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
