import React from "react";
import { MONTHS } from "./Calendar";

export interface TodoType {
  content: string;
  dueDate: Date;
  done: boolean;
}

interface TodoItemProps {
  todo: TodoType;
  toggleTodo: (selectedTodo: TodoType) => void;
}

const getDueDate = (date: Date) => {
  const month = MONTHS[date.getMonth()];
  const selectedDate = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${month} ${selectedDate} ${hours}:${
    minutes >= 10 ? minutes : "0" + minutes
  }`;
};

function TodoItem({ todo, toggleTodo }: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo)}
      ></input>
      <span>{todo.content}</span>
      <span> </span>
      <span>{getDueDate(todo.dueDate)}</span>
    </li>
  );
}

export default TodoItem;
