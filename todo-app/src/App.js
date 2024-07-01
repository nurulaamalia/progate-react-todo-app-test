import React, { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Finish Progate React Course", completed: true },
    { id: 2, title: "Have lunch with Guru Domba", completed: false },
    { id: 3, title: "Study React with Ninja Ken", completed: false },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", padding: "12px" }}>
      <h1 style={{ fontSize: "36px" }}>My Todo List</h1>
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
