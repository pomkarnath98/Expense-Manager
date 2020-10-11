import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"

const createComposer =
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__) || 
  compose;
export const store = createStore(
  combineReducers({reducer }),
  createComposer(applyMiddleware(thunk))
);

