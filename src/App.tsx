import React, { useState } from "react";
import TodoList from "./components/TodoList";
import EnterTodoForm from "./components/EnterTodoForm";
import { TodoType } from "./components/TodoItem";
import Calendar from "./components/Calendar";
import TimeSetter from "./components/TimeSetter";

let todos: TodoType[] = [
  {
    content: "Write Typescript",
    dueDate: new Date(),
    done: false,
  },
  {
    content: "Sleep until dead",
    dueDate: new Date(),
    done: true,
  },
];

function App() {
  const [todoList, setTodos] = useState<TodoType[]>(todos);
  const [calendarHidden, toggleCalendar] = useState(true);
  const [timeSetterHidden, toggleTimeSetter] = useState(true);
  const [todoContent, contentSetter] = useState("");
  const [selectedDueDate, setDueDate] = useState(new Date());

  const toggleTodo = (selectedTodo: TodoType) => {
    const newTodos = todoList.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const addNewTodo = (content: string, dueDate: Date) => {
    setTodos([...todoList, { content, dueDate, done: false }]);
  };

  return (
    <div className="App">
      <TodoList todos={todoList} toggleTodo={toggleTodo} />
      <EnterTodoForm
        contentSetter={contentSetter}
        calendarHidden={calendarHidden}
        toggleCalendar={toggleCalendar}
      />
      <Calendar
        dateSetter={setDueDate}
        calendarHidden={calendarHidden}
        timeSetterHidden={timeSetterHidden}
        toggleTimeSetter={toggleTimeSetter}
      />
      <TimeSetter
        selectedDueDate={selectedDueDate}
        calendarHidden={calendarHidden}
        toggleCalendar={toggleCalendar}
        timeSetterHidden={timeSetterHidden}
        toggleTimeSetter={toggleTimeSetter}
        todoContent={todoContent}
        addeNewTodo={addNewTodo}
      />
    </div>
  );
}

export default App;
