import React from "react";
import TodoList from "./components/TodoList";
import EnterTodoForm from "./components/EnterTodoForm";

let todos = [
  {
    id: 0,
    content: "Write Typescript",
    done: false,
  },
  {
    id: 1,
    content: "Sleep until dead",
    done: true,
  },
];

function App() {
  return (
    <div className="App">
      <TodoList todos={todos} />
      <EnterTodoForm />
    </div>
  );
}

export default App;
