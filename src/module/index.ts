import { combineReducers } from "redux";
import todoState from "./Todo";

const rootReducer = combineReducers({ todoState });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
