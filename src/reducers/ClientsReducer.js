import { actionTypes } from "../actions/ClientActions";

const clientsState = [];
let index;

export default function ClientsReducer(state = clientsState, action) {
  switch (action.type) {
    case actionTypes.SET_CLIENTSS:
      return action.clients;
    case actionTypes.ADD_CLIENTS:
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
