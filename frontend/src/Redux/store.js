import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { dashboardReducer } from "./dashboard/reducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  firstReducer: reducer,
  dashboard: dashboardReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
