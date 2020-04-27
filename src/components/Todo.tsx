import React from "react";
import { TodoType } from "../module/Todo";

interface TodoProps {
  todo: TodoType;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Todo({ todo, onToggle }: TodoProps) {
  return (
    <li key={todo.id.toString()} id={todo.id.toString()}>
      <input type="checkbox" checked={todo.done} onChange={onToggle}></input>
      <span>{todo.content}</span>
    </li>
  );
}

export default Todo;
