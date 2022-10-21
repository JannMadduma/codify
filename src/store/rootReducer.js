import { combineReducers } from "redux";
import freelancers from "../reducers/FreelancersReducer";
import clients from "../reducers/ClientsReducer";
import projects from "../reducers/ProjectReducer";

const rootReducer = combineReducers({
  clients,
  projects,
  freelancers,
});

export default rootReducer;
