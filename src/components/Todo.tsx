import React from "react";
import { TodoType } from "../module/Todo";

interface TodoProps {
  todo: TodoType;
  onToggle: (e: React.MouseEvent<HTMLElement>) => void;
}

function Todo({ todo, onToggle }: TodoProps) {
  return (
    <li key={todo.id.toString()} id={todo.id.toString()}>
      <input type="checkbox" checked={todo.done} onClick={onToggle}></input>
      <span>{todo.content}</span>
    </li>
  );
}

export default Todo;
