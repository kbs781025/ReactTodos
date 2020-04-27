import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../module/index";
import { addTodo, removeTodo, toggleTodo } from "../module/Todo";
import rootReducer from "../module/index";
import Todo from "../components/Todo";

function TodosContainer() {
  const todoList = useSelector((state: RootState) => state.todoState.TodoList);
  const dispatch = useDispatch();

  const onToggle = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.parentElement) {
      const id = parseInt(e.currentTarget.parentElement.id);
      dispatch(toggleTodo(id));
    }
  };

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <Todo todo={todo} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
}

export default TodosContainer;
