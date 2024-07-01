import React from "react";

const TodoItem = ({ todo, toggleCompleted }) => {
  const getTodoTitleStyle = () => {
    return { textDecoration: todo.completed ? "line-through" : "none" };
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px",
  },
};

export default TodoItem;
