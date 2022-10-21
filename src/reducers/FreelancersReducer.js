import { actionTypes } from "../actions/FreelancersAction";

const loggedIn = {};

export default function FreelancersReducer(state = loggedIn, action) {
  switch (action.type) {
    case actionTypes.SET_LOGGEDIN:
      return action.loggedIn;
    default:
      return state;
  }
}
