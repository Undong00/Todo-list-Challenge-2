import { combineReducers, createStore } from "redux";
import reducer_body from "../module/body";
import reducer_title from "../module/title";
import reducer_user from "../module/users";

const rootReducer = combineReducers({
  reducer_title: reducer_title,
  reducer_body: reducer_body,
  reducer_user: reducer_user,
});

const store = createStore(rootReducer);

export default store;
