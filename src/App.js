import React, { useState, useReducer } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);




  

  return (
    <div className='App'>
      <form onChange={(e)=> setName(e.target.value)}>
        <input type='text' value={name} />
      </form>
    </div>
  );
} 

export default App;
