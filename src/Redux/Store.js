import { createStore, combineReducers, applyMiddleware } from "redux";
import myReducer from "../Reducers/myReducer";
import logger from "redux-logger";

let combineReducer = combineReducers({ myReducer });
let Store = createStore(combineReducer, applyMiddleware(logger));

export default Store;
