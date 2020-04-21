import React from "react";
import TodoItem, { TodoType } from "./TodoItem";

interface TodoListProps {
  todos: TodoType[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
