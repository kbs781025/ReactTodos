import React from "react";

interface TodoProps {
  content: string;
  dueDate: Date;
  done: boolean;
  onToggle: () => void;
  getDueDate: (date: Date) => string;
}

function Todo({ content, dueDate, done, onToggle, getDueDate }: TodoProps) {
  return (
    <li>
      <input type="checkbox" checked={done} onChange={onToggle}></input>
      <span>{content}</span>
      <span> </span>
      <span>{getDueDate(dueDate)}</span>
    </li>
  );
}

export default Todo;
