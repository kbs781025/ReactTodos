import React, { useState } from "react";

export interface TodoType {
  id: number;
  content: string;
  done: boolean;
}

interface TodoItemProps {
  todo: TodoType;
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.done}></input>
        {todo.content}
      </label>
    </li>
  );
}

export default TodoItem;
