import React from "react";
import TodoItem, { TodoType } from "./TodoItem";

interface TodoListProps {
  todos: TodoType[];
  toggleTodo: (selectedTodo: TodoType) => void;
}

function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.content} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
