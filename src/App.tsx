import React, { useState } from "react";
import TodoList from "./components/TodoList";
import EnterTodoForm from "./components/EnterTodoForm";
import { TodoType } from "./components/TodoItem";
import Calendar from "./components/Calendar";

let todos = [
  {
    content: "Write Typescript",
    done: false,
  },
  {
    content: "Sleep until dead",
    done: true,
  },
];

function App() {
  const [todoList, setTodos] = useState<TodoType[]>(todos);
  const [calendarHidden, toggleCalendar] = useState(false);

  const toggleTodo = (selectedTodo: TodoType) => {
    const newTodos = todoList.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const addNewTodo = (content: string) => {
    setTodos([...todoList, { content, done: false }]);
  };

  return (
    <div className="App">
      <TodoList todos={todoList} toggleTodo={toggleTodo} />
      <EnterTodoForm
        addNewTodo={addNewTodo}
        calendarHidden={calendarHidden}
        toggleCalendar={toggleCalendar}
      />
      <Calendar calendarHidden={calendarHidden} />
    </div>
  );
}

export default App;
