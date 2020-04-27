const ADD = "todo/ADD" as const;
const REMOVE = "todo/REMOVE" as const;
const TOGGLE = "todo/TOGGLE" as const;

export const addTodo = (content: string) => ({ type: ADD, payload: content });
export const removeTodo = (id: number) => ({ type: REMOVE, payload: id });
export const toggleTodo = (id: number) => ({ type: TOGGLE, payload: id });

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>;

interface TodoType {
  id: number;
  content: string;
  dueDate: Date;
}

interface TodoListState {
  TodoList: TodoType[];
}

const initialState: TodoListState = {
  TodoList: [{ id: 0, content: "", dueDate: new Date() }],
};

function todoState(state: TodoListState = initialState, action: TodoAction) {
  switch (action.type) {
    case ADD:
      const newTodo = {
        id: Date.now(),
        content: action.payload,
        dueDate: new Date(),
      };
      return { TodoList: [...state.TodoList, newTodo] };
    case REMOVE:
      return {
        TodoList: state.TodoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export default todoState;
