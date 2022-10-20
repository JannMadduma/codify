import { combineReducers } from "redux";
import loggedIn from "../reducers/LoggedInReducer";
import clients from "../reducers/ClientsReducer";

const rootReducer = combineReducers({
  loggedIn,
  clients,
});

export default rootReducer;
