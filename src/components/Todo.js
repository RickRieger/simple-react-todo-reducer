import React from 'react';
import { ACTIONS } from '../App';
function Todo({ todo, dispatch }) {
  return (
    <div>
      <li
        style={{
          backgroundColor: todo.complete ? 'green' : 'grey',
          width: '50%',
          margin: 'auto',
        }}
      >
        {`${todo.name} `}
        <button
          onClick={() => {
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            });
          }}
        >
          Toggle-completed
        </button>
        <button
          onClick={() => {
            dispatch({
              type: ACTIONS.DELETE_TODO,
              payload: { id: todo.id },
            });
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default Todo;
