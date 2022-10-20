import { actionTypes } from "../actions/ProjectActions";

const projectsState = [];
let index;

export default function ProjectsReducer(state = projectsState, action) {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:
      return action.clients;
    case actionTypes.ADD_PROJECT:
      return [
        { ...action.clientDetails, idNo: action.clientDetails.id },
        ...state,
      ];
    case actionTypes.EDIT_CLIENTS:
      console.log("bulot");
      console.log(state);
      console.log(action);
      index = state.findIndex((mod) => mod.idNo === action.clientDetails.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        action.clientDetails,
        ...state.slice(index + 1), // everything after current item
      ];
    case actionTypes.DELETE_CLIENTS:
      index = state.findIndex((mod) => mod.idNo === action.clientDetails.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        ...state.slice(index + 1), // everything after current item
      ];
    default:
      return state;
  }
}
