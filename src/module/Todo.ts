const ADD = "todo/ADD" as const;
const REMOVE = "todo/REMOVE" as const;

export const addTodo = (content: string) => ({ type: ADD, payload: content });
export const removeTodo = (id: number) => ({ type: REMOVE, payload: id });

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>;

export type TodoState = {
  id: number;
  content: string;
  dueDate: Date;
}[];

const initialState: TodoState = [{ id: 0, content: "", dueDate: new Date() }];

function todoState(state: TodoState = initialState, action: TodoAction) {
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
