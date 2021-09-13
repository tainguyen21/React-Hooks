import React from "react";
import PropTypes from "prop-types";

ToDoList.propTypes = {
  todos: PropTypes.array,
  onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
  todos: [],
  onToDoClick: null,
};

function ToDoList(props) {
  const { todos, onToDoClick } = props;

  function handleToDoClick(todo) {
    if (onToDoClick) onToDoClick(todo);
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleToDoClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
