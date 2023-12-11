import {combineReducers} from "redux";
import personReducer from "./contact";

const rootReducer = combineReducers({personReducer});
export default rootReducer;