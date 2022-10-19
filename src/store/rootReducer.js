import { combineReducers } from "redux";
import loggedIn from "../reducers/LoggedInReducer";

const rootReducer = combineReducers({
  loggedIn,
});

export default rootReducer;
