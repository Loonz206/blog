// Reducers
import { combineReducers } from "redux";
import postsReducers from "./postsReducer";

export default combineReducers({
  posts: postsReducers
});
