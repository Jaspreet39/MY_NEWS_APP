import { combineReducers } from "redux";
import newsReducer from "./newsReducer";

let reducers = combineReducers({ newsReducer });

export default reducers;
