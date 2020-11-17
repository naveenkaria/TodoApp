import { combineReducers } from "redux";
import addTodoReducer from "./reducer/addReducer";

const rootReducer = combineReducers({
    addTodoReducer: addTodoReducer
});

export default rootReducer;