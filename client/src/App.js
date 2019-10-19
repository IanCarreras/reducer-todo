import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
