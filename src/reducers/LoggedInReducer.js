import { actionTypes } from "../actions/LoggedinActions";

const loggedIn = {};

export default function LoggedInReducer(state = loggedIn, action) {
  switch (action.type) {
    case actionTypes.SET_LOGGEDIN:
      return action.loggedIn;
    default:
      return state;
  }
}
