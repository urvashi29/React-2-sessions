import { createStore, applyMiddleware, combineReducers } from "redux";
import { productReducer } from "./reducers/productReducer";
import { thunk } from "redux-thunk";

export const store = createStore(
  combineReducers(productReducer),
  applyMiddleware(thunk),
);
