import React from "react";

interface TodoType {
  content: string;
  dueDate: Date;
  done: boolean;
}

interface TodoProps {
  todo: TodoType;
  onToggle: () => void;
  getDueDate: (date: Date) => string;
}

function Todo({ todo, onToggle, getDueDate }: TodoProps) {
  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={onToggle}></input>
      <span>{todo.content}</span>
      <span> </span>
      <span>{getDueDate(todo.dueDate)}</span>
    </li>
  );
}

export default Todo;
