import { combineReducers } from "redux";
import loggedIn from "../reducers/LoggedInReducer";
import clients from "../reducers/ClientsReducer";
import projects from "../reducers/ProjectReducer";

const rootReducer = combineReducers({
  loggedIn,
  clients,
  projects,
});

export default rootReducer;
