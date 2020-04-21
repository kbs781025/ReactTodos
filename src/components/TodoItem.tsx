import React from "react";

export interface TodoType {
  content: string;
  done: boolean;
}

interface TodoItemProps {
  todo: TodoType;
  toggleTodo: (selectedTodo: TodoType) => void;
}

function TodoItem({ todo, toggleTodo }: TodoItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo)}
        ></input>
        {todo.content}
      </label>
    </li>
  );
}

export default TodoItem;
