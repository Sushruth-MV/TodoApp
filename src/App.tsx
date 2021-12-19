import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import initialTodos from './initialTodos';
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo, 
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);    
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <div className="heading">
            <h1>What's the Plan for Today...</h1>
          </div>
       
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
