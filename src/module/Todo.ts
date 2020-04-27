const ADD = "todo/ADD" as const;
const REMOVE = "todo/REMOVE" as const;

export const addTodo = (content: string) => ({ type: ADD, payload: content });
export const removeTodo = (id: number) => ({ type: REMOVE, payload: id });

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>;

interface TodoType {
  id: number;
  content: string;
  dueDate: Date;
}

type TodoListState = TodoType[];

const initialState: TodoListState = [
  { id: 0, content: "", dueDate: new Date() },
];

function todoState(state: TodoListState = initialState, action: TodoAction) {
  switch (action.type) {
    case ADD:
      const newTodo = {
        id: Date.now(),
        content: action.payload,
        dueDate: new Date(),
      };
      return [...state, newTodo];
    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todoState;
